import Application from "../models/application.js";
import {
  canSaveStageToDB,
  extractDataFromBody,
  initialDriveFiles,
  uploadFile,
} from "../util/helperFuntions.js";

export const createApplication = async (req, res) => {
  const { id, stage: progress, createdAt } = req.body;
  const data = extractDataFromBody(req.body);
  const files = Object.values(req.files).map(([file]) => file);
  let application;
  let driveFiles = initialDriveFiles;
  const stage = Number(progress);

  try {
    if (!canSaveStageToDB(stage, data)) throw "Incorrect or Incomplete details";

    for (let f = 0; f < files.length; f += 1) {
      const { key, name, driveId } = await uploadFile(files[f]);
      driveFiles = { ...driveFiles, [key]: { name, driveId } };
    }

    if ((!id || id === "null") && stage !== 7) {
      application = new Application({
        ...data,
        ...driveFiles,
        completedStages: [{ stage, createdAt }],
      });
      await application.save();
    } else {
      application = await Application.findOneAndUpdate(
        { _id: id },
        {
          ...data,
          ...driveFiles,
          $push: { completedStages: { stage, createdAt } },
        }
      );
      if (stage === 7) {
        // nodemailer
        //send details to ammitt mail
        //send submission comfirmation to applicant's mail
      }
    }

    return res.status(200).json({
      id: application?._id,
      completedStages: [
        ...(id ? application?.completedStages : []),
        { stage, createdAt },
      ],
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};

export const getApplication = async (req, res) => {
  const { id } = req.params;

  try {
    const application = await Application.findById(id);

    return res.status(200).json(application);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};

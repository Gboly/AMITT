import Application from "../models/application.js";

export const createApplication = async (req, res) => {
  const { id, stage, createdAt, data } = req.body;
  let application;
  try {
    if (!id) {
      application = new Application({
        ...data,
        completedStages: [{ stage, createdAt }],
      });
      await application.save();
    } else {
      application = await Application.findOneAndUpdate(
        { _id: id },
        { ...data, $push: { completedStages: { stage, createdAt } } }
      );
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

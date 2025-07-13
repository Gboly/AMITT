import Application from "../models/application.js";
import auth from "../config/googleConfig.js";
import stream from "stream";
import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const requiredDataByStage = {
  1: [
    "firstName",
    "lastName",
    "address",
    "city",
    "state",
    "postCode",
    "country",
    "phone",
    "email",
    "birthday",
    "gender",
    "race",
  ],
  2: [
    "highSchool",
    "highSchoolDuration",
    "highSchoolGraduate",
    "university",
    "univeristyDuration",
    "univeristyCourse",
    "universityGraduate",
  ],
  3: ["skills"],
  4: [],
  5: [
    "referenceName",
    "refRelationship",
    "refRelDuration",
    "refPhone",
    "refEmail",
  ],
  6: ["resume"],
  7: [],
};

const dataExemptions = ["id", "stage", "createdAt"];
export const extractDataFromBody = (body) => {
  return Object.entries(body).reduce((accum, [key, value]) => {
    !dataExemptions.includes(key) && (accum = { ...accum, [key]: value });
    return accum;
  }, {});
};

const stages = [1, 2, 3, 4, 5, 6];
export const canSaveStageToDB = async (stage, data, id) => {
  if (stage !== 7) return requiredDataByStage[stage]?.every((key) => data[key]);

  const application = await Application.findById(id);
  if (!application) return false;

  const completedStages = application.completedStagesdetails.map(
    ({ stage }) => stage
  );
  return stages.every((stage) => completedStages.includes(stage));
};

export const uploadFile = async (fileObject) => {
  if (!fileObject) return { name: "", driveId: "", key: fileObject.fieldname };

  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject.buffer);
  const {
    data: { name, id },
  } = await google.drive({ version: "v3", auth }).files.create({
    media: {
      mimeType: fileObject.mimetype,
      body: bufferStream,
    },
    requestBody: {
      name: fileObject.originalname,
      parents: ["1TmTPl5NoEfLUaGb4CmmqXTfbNYpPJh2Y"],
    },
    fields: "id,name",
  });
  // console.log(`Uploaded file ${name} ${id}`);
  return { name, driveId: id, key: fileObject.fieldname };
};

const fileNames = ["resume", "coverLetter"];
export const initialDriveFiles = fileNames.reduce((accum, name) => {
  accum = { ...accum, [name]: { name: "", driveId: "" } };
  return accum;
}, {});

export const getSubmitMailOptions = (application) => {
  const data = JSON.parse(JSON.stringify(application));
  const { firstName, email, resume, coverLetter } = data;
  const submitOptions = {
    from: process.env.GMAIL,
    to: process.env.GMAIL,
    template: "submission",
    subject: "New Application Submitted",
    context: {
      ...data,
      resume: `https://drive.google.com/file/d/${resume.driveId}/view`,
      coverLetter: `https://drive.google.com/file/d/${coverLetter.driveId}/view`,
    },
  };

  const confirmOptions = {
    from: process.env.GMAIL,
    to: email,
    template: "confirmation",
    subject: "Your Application is confirmed",
    context: {
      firstName,
    },
  };
  return [submitOptions, confirmOptions];
};

export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

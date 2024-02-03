import mongoose from "mongoose";

const schema = mongoose.Schema;

const applicationSchema = schema({
  firstName: { type: String, default: "", index: "text" },
  lastName: { type: String, default: "", index: "text" },
  middleName: { type: String, default: "", index: "text" },
  birthday: { type: String, default: "", index: "text" },
  phone: { type: String, default: "", index: "text" },
  email: { type: String, default: "", index: "text" },
  country: { type: String, default: "", index: "text" },
  city: { type: String, default: "", index: "text" },
  state: { type: String, default: "", index: "text" },
  address: { type: String, default: "", index: "text" },
  postCode: { type: String, default: "", index: "text" },
  gender: { type: String, default: "", index: "text" },
  race: { type: String, default: "", index: "text" },
  highSchool: { type: String, default: "", index: "text" },
  highSchoolDuration: { type: String, default: "", index: "text" },
  highSchoolGraduate: { type: String, default: "", index: "text" },
  university: { type: String, default: "", index: "text" },
  univeristyDuration: { type: String, default: "", index: "text" },
  univeristyCourse: { type: String, default: "", index: "text" },
  universityGraduate: { type: String, default: "", index: "text" },
  skills: { type: String, default: "", index: "text" },
  qualifications: { type: String, default: "", index: "text" },
  prevOrganization: { type: String, default: "", index: "text" },
  prevPosition: { type: String, default: "", index: "text" },
  reasonForLeaving: { type: String, default: "", index: "text" },
  referenceName: { type: String, default: "", index: "text" },
  refRelationship: { type: String, default: "", index: "text" },
  refRelDuration: { type: String, default: "", index: "text" },
  refPhone: { type: String, default: "", index: "text" },
  refEmail: { type: String, default: "", index: "text" },
  resume: {
    type: { name: String, driveId: String },
    default: { name: "", driveId: "" },
    index: "text",
  },
  coverLetter: {
    type: { name: String, driveId: String },
    default: { name: "", driveId: "" },
    index: "text",
  },
  completedStages: { type: [{ stage: Number, createdAt: Date }], default: [] },
  createdAt: { type: Date, default: new Date() },
});

const Application = mongoose.model("application", applicationSchema);
export default Application;

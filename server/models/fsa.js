import mongoose from "mongoose";

const schema = mongoose.Schema;

const fsaSchema = schema({
  email: { type: String, default: "", index: "text" },
  createdAt: { type: Date, default: new Date() },
});

const FsaApplicants = mongoose.model("fsaApplicants", fsaSchema);
export default FsaApplicants;

import mongoose from "mongoose";

const schema = mongoose.Schema;

const newsletterSubsSchema = schema({
  name: { type: String, default: "", index: "text" },
  email: { type: String, default: "", index: "text" },
  createdAt: { type: Date, default: new Date() },
});

const NewsletterSubs = mongoose.model("newsletterSubs", newsletterSubsSchema);
export default NewsletterSubs;

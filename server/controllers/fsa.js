import FsaApplicants from "../models/fsa.js";
import { isValidEmail } from "../util/helperFuntions.js";

export const joinFsa = async (req, res) => {
  const { email, createdAt } = req.body;

  try {
    if (!isValidEmail(email)) throw "Invalid Email";
    const fsaApplicant = new FsaApplicants({ email, createdAt });
    await fsaApplicant.save();

    res.status(200).json(fsaApplicant);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};

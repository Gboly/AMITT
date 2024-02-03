import { google } from "googleapis";

const KEYFILEPATH = "../server/cred.json";
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

export default auth;

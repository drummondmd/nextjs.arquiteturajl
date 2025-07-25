import { google } from "googleapis";
import { JWT } from "google-auth-library";
import fs from "fs";
import path from "path";


const KEYFILEPATH = path.join(process.cwd(), "charged-garden-466717-p4-e1df4ec0e4b5.json"); // o .json baixado
const SCOPES = ["https://www.googleapis.com/auth/drive"];

export function getDriveService() {


    const auth = new google.auth.GoogleAuth({
      keyFile: KEYFILEPATH,
      scopes: SCOPES,
    });


  return google.drive({ version: "v3", auth });
}

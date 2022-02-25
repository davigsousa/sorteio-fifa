import fs from "fs";
import path from "path";
import getConfig from "next/config";
import readline from "readline";

export async function processLineByLine(filename: string, lineIndex: number) {
  const fileStream = fs.createReadStream(filename);

  const readlines = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let index = 0;
  for await (const line of readlines) {
    if (index === lineIndex) {
      return line;
    }
    index++;
  }

  return null;
}

export function loadJSON(filename: string) {
  return JSON.parse(fs.readFileSync(filename, "utf8"));
}

export const serverPath = (staticFilePath: string) => {
  return path.join(
    process.cwd(),
    process.env.NODE_ENV === "development"
      ? `./public/${staticFilePath}`
      : staticFilePath
  );
};

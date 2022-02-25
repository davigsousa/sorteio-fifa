import fs from "fs";
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

import { processLineByLine } from "./utils/file";

class ImageController {
  fifaVersion: string;

  constructor(fifaVersion: string) {
    this.fifaVersion = fifaVersion;
  }

  async getImage(id: number) {
    const filename = `./data/images_${this.fifaVersion}.txt`;

    const result = await processLineByLine(filename, id);
    return "data:image/png;base64," + result || "";
  }
}

export default ImageController;

import { processLineByLine, serverPath } from "./utils/file";

class ImageController {
  fifaVersion: string;

  constructor(fifaVersion: string) {
    this.fifaVersion = fifaVersion;
  }

  async getImage(id: number) {
    const filename = serverPath(`./data/images_${this.fifaVersion}.txt`);

    const result = await processLineByLine(filename.toString(), id);
    return "data:image/png;base64," + result || "";
  }
}

export default ImageController;

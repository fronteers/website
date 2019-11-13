import { mkdir, existsSync } from "fs";
import { join } from "path";
import { promisify } from "util";

const makeDir = promisify(mkdir);

export class FolderCreator {
  constructor(baseDir) {
    this.baseDir = baseDir;

    // Create folder if it doesn't exist yet
    if (!existsSync(this.baseDir)) {
      makeDir(this.baseDir);
    }
  }

  createFolder(...pathSegments) {
    return makeDir(join(this.baseDir, ...pathSegments), { recursive: true });
  }
}

import { globSync } from "glob";
import Critters from "critters";
import fs from "fs";

const critters = new Critters({
  path: "dist",
});

const files = globSync("/**/*.html", { root: "dist" });

files.forEach(async (filePath) => {
  const inlined = await critters.process(
    fs.readFileSync(filePath, "utf8").toString()
  );
  fs.writeFileSync(filePath, inlined, "utf8");
});

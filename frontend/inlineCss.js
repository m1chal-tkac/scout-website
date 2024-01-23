const glob = require("glob");
const Critters = require("critters");
const fs = require("fs");

const critters = new Critters({
  path: "dist",
});

glob("/**/*.html", { root: "dist" }, async (err, files) => {
  if (err) throw err;

  await Promise.all(
    files.forEach(async (filePath) => {
      const inlined = await critters.process(
        await fs.readFile(filePath, "utf8")
      );
      await fs.writeFile(filePath, inlined, "utf8");
    })
  );
});

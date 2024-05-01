"use strict";

const fs = require("fs");

/**
 * A set of functions called "actions" for `calendar`
 */

module.exports = {
  action: async (ctx, next) => {
    ctx.type = "text/calendar; charset=utf-8";
    ctx.res.writeHead(200, {
      "Content-Type": "text/calendar; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    });
    const stream = fs.createReadStream(
      "public/uploads/Kalendar_c5721d81e0.ics"
    );
    stream.pipe(ctx.res);
    await new Promise((resolve) => ctx.res.on("finish", resolve));
  },
};

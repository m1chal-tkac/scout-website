const crypto = require("crypto");

module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: crypto.randomBytes(16).toString("base64"),
    },
  },
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
    },
  },
});

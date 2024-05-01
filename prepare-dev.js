#!/usr/bin/env node

const fs = require("fs");

fs.cpSync("example-data/frontend.env", "frontend/.env");
fs.cpSync("example-data/images", "backend/public/uploads", { recursive: true });
fs.cpSync("example-data/example-data.db", "backend/data.db");

const crypto = require("crypto");

let backendEnv = fs.readFileSync("example-data/backend.env", "utf8");

while (backendEnv.includes("tajne")) {
  backendEnv = backendEnv.replace(
    "tajne",
    crypto.randomBytes(20).toString("hex")
  );
}

fs.writeFileSync("backend/.env", backendEnv);

let calendar = fs.readFileSync("example-data/Kalendar.ics", "utf8");

const getStringDate = (date) => {
  return `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${(
    "0" + date.getDate()
  ).slice(-2)}`;
};

const getTimeStamp = (date) => {
  return (
    date.toISOString().replace(/-/g, "").replace(/:/g, "").replace(/\..+/, "") +
    "Z"
  );
};

const Date1 = new Date(Date.now() + 1000 * 60 * 60 * 24 * 28);
const Date2 = new Date(Date.now() + 1000 * 60 * 60 * 24 * 29);
const Date3 = new Date(Date.now() + 1000 * 60 * 60 * 24 * 27);

const Date4 = new Date(
  +new Date(new Date().toDateString()) +
    1000 * 60 * 60 * 24 * 30 +
    1000 * 60 * 60 * 8
);
const Date5 = new Date(
  +new Date(new Date().toDateString()) +
    1000 * 60 * 60 * 24 * 30 +
    1000 * 60 * 60 * 14
);

calendar = calendar.replace("{1}", getStringDate(Date1));
calendar = calendar.replace("{2}", getStringDate(Date2));
calendar = calendar.replace("{3}", getTimeStamp(Date3));

calendar = calendar.replace("{4}", getTimeStamp(Date4));
calendar = calendar.replace("{5}", getTimeStamp(Date5));

fs.writeFileSync("backend/public/uploads/Kalendar_c5721d81e0.ics", calendar);

console.log(
  "\nPřiraveno k použití.\n\nEmail: admin@example.com\nHeslo: Admin123"
);

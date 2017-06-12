global.__pkg = require("./package.json");

let path = require("path");
let gulp = require("gulp");

require("babel-register")({presets: ["es2015", "react", "stage-0"]});
require("babel-polyfill");

global.__args = require("yargs")
  .choices("env", __pkg._envs)
  .default("env", "development")
  .boolean("production")
  .boolean("debug")
  .boolean("sync")
  .alias("D", "debug")
  .alias("p", "production")
  .alias("s", "sync")
  .argv;

if (global.__args.production) {
  global.__args.env = "production"
}

global.__args.env = global.__args.env.toLowerCase();

require("require-all")(path.resolve("build", "tasks"));
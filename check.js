"use strict";

const myPkg = require("./package.json");

const Fs = require("fs");
const isInstalledGlobally = require("is-installed-globally");
if (!isInstalledGlobally) {
  if (process.env.INIT_CWD === process.cwd()) {
    const pkg = JSON.parse(Fs.readFileSync("package.json").toString());
    if (pkg.name === myPkg.name) {
      process.exit(0);
    }
  }

  console.error(
    `

${myPkg.name} is only intended to be installed globally:

  - npm:  'npm install -g ${myPkg.name}'
  - yarn: 'yarn global add ${myPkg.name}'

If you want to use the @xarc/run task runner in your project, please install the @xarc/run package.

`
  );
  process.exit(1);
}

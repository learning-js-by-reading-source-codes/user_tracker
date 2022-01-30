let fs = require("fs");
let documentation = require("documentation");
let cline = "```";
let tp = `# 
##### 
##### 
##### 

> 安装依赖

${cline}shell
yarn add git+https://github.com/zhoujie16/zxm_spm.git
${cline}

> 引入

${cline}js
import ZxmSpm from "zxm-spm";
${cline}

`;

let files = fs.readdirSync("src");
files = files.map((x) => `src/${x}`);
documentation
  .build(files, {})
  .then(documentation.formats.md)
  .then((output) => {
    let resput = `${tp}
${output}`;
    fs.writeFileSync("./README.md", resput);
  });

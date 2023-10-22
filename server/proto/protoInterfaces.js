const fs = require('fs');
const path = require('path');

const protoFilePath = path.join(__dirname, 'combined.ts'); // path to your generated file
const fileContents = fs.readFileSync(protoFilePath, 'utf-8');

const interfaceRegex = /export (interface|enum) [\s\S]*?\}(?=\n|$)/gm;

const imports = ["import { Empty } from './google/protobuf/empty';"];
const interfaces = fileContents.match(interfaceRegex);

fs.writeFileSync(
  path.join(__dirname, 'interfaces.ts'),
  [...imports, ...interfaces].join('\n\n'),
);

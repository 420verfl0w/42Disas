import fetch from 'node-fetch';
// import { XMLParser } from 'fast-xml-parser';
import { Parser } from 'xml2js';

const res = await fetch('http://ref.x86asm.net/x86reference.xml');
const data = await res.text();
// const parser = new XMLParser();
// let object = parser.parse(data);

var parser = new Parser();

let one_opcd = 0;
let two_opcd = 0;
let version = 0;


parser.parseString(data, (err, res) => {
    version = res['x86reference']['$']['version'];
    one_opcd = res['x86reference']['one-byte'];
});

// for (let i = 0; i < 0xF; i++) {
    // console.log(one_opcd[0]['pri_opcd'][i]['$']['value']);
    // console.log(one_opcd[0]['pri_opcd'][i]['entry'][0]['syntax'][0]);
// }

console.log(one_opcd[0]['pri_opcd'][64]['$']['value']);
console.log(one_opcd[0]['pri_opcd'][64]['entry'][0]['syntax'][0]);
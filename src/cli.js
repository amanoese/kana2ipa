#!/usr/bin/env node
const program  = require('commander');
const getStdin = require('get-stdin');

const converter = require('./converter');

const package = require('../package.json');

program._name = package.name
program._usage = "[text]\n\n カタカナをIPAの発音記号に変換します。"

program
.arguments('[text]')
.action(async (text,options)=> {
  let inputText = text || (await getStdin());
  console.log(converter.kana2ipa(inputText))
})
.parse(process.argv);

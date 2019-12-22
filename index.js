let ipa = require('./ipa')
let ipa_small = require('./ipa-small')

let stdin = require("fs").readFileSync("/dev/stdin", "utf8");

let ipa_small_match = Object.keys(ipa_small).join('|').replace(/.*/,'($&)')

// replace Basic Word
let bIpaString = stdin
  .normalize('NFKC') // harf size to wide size
  .replace(new RegExp(ipa_small_match,'g'),(v)=>ipa_small[v]||v)
  .match(/./ug)
  .map(v=>ipa[v]||v)
  .join('')

//important N is Specialy word
let nIpaString = bIpaString
   .replace(/N(p|b|m)/g,'m$1')
   .replace(/N(t|d|t͡s|n)/gu,'n$1')
   .replace(/N(k|g)/g,'ŋ$1')
   .replace(/N(ɽ)/g,'ṉ$1')
   .replace(/(.)N(a|i|ɯ|e|o|s|h|j|w)/ug,'$1$1\u0303$2')
   .normalize('NFC')

//convert Specialy word
let mIpaString = nIpaString
   .replace(/ッ(.)/ug,'$1$1')
   .replace(/(.)ー/ug,'$1ː')
   .normalize('NFC')

console.log(mIpaString)

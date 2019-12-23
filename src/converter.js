const XRegExp = require('xregexp');
XRegExp.install('astral');

let ipa = require('./ipa')
let ipa_small = require('./ipa-small')

module.exports = {
  hiragana2katakana(text) {
    const _regexp = XRegExp('\\p{Hiragana}','g')
    return text.replace(_regexp,v=> String.fromCharCode(+v.charCodeAt(0) + 0x60))
  },
  kana2ipa(inText) {
    if (inText.length <= 0) {
      return inText
    }
    let ipa_small_match = Object.keys(ipa_small).join('|').replace(/.*/,'($&)')

    let katakanaText = this.hiragana2katakana(inText)
    // replace Basic Word
    let bIpaString = katakanaText
      .normalize('NFKC') // harf size to wide size
      .replace(new RegExp(ipa_small_match,'g'),v=>(ipa_small[v]||v))
      .match(/./ug)
      .map(v=>ipa[v]||v)
      .join('')

    //important ん is Specialy word
    let nIpaString = bIpaString
       .replace(/N(p|b|m)/g,'m$1')
       .replace(/N(t|d|t͡s|n)/gu,'n$1')
       .replace(/N(k|ɡ)/g,'ŋ$1')
       .replace(/N(ɽ)/g,'ṉ$1')
       .replace(/(.)N(a|i|ɯ|e|o|s|h|j|w)/ug,'$1$1\u0303$2')
       .replace(/N/ug,'ɴ')
       .normalize('NFC')

    //convert Specialy word
    let mIpaString = nIpaString
       .replace(/ッ(.)/ug,'$1$1')
       .replace(/mm/ug,'mː') // んの後にpの発音が来たとき用？
       .replace(/nn/ug,'nː') // これはよくわかんない
       .replace(/oɯ/ug,'oː') // おう　の発音はオーになる？
       .replace(/(.)ー/ug,'$1ː')
       .normalize('NFC')

    return mIpaString
  }
}


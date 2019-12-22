kana2ipa
---

カタカナを日本語で発音する際の音声記号([International Phonetic Alphabet (IPA)](https://ja.wikipedia.org/wiki/国際音声記号)) に変換するコマンドです。  
Node.jsのライブラリとしても使用できます。  

@amanoese の独自調査により作成しているため、  
正確な発音である保証はありません。  

## Install

```bash
$ npm i -g kana2ipa
```

## Usage

```bash
$ kana2ipa コンニチワ
koɴɲit͡ɕiɰa
$ kana2ipa ツイッター
tsɯittaː
$ kana2ipa コンパンジャンドラム
kompaɴʤandoɾamɯ
```

## Usage Library

```node
const converter = require('converter')

console.log(converter.kana2ipa('コンニチワ'))
// koɴɲit͡ɕiɰa
```

## Feature

- ひらがなtoIPA
    TBD
- to X-SAMPA
    TBD



kana2ipa
---
[![npm version](http://img.shields.io/npm/v/kana2ipa.svg)](https://npmjs.org/package/kana2ipa)

「ひらがな」または「カタカナ」を音声記号([International Phonetic Alphabet (IPA)](https://ja.wikipedia.org/wiki/国際音声記号)) に変換するコマンドです。  
Node.jsのライブラリとしても使用できます。  

## Description
「ひらがな」または「カタカナ」を音声記号(IPA)に変換します。  
**現代の標準的な日本語話術者の発音を想定した変換になります。**  

変換のルールは独自調査により作成しているため、  
正確な発音である保証はありません。  

## Install

```bash
$ npm i -g kana2ipa
```

## Usage on CLI

```bash
$ kana2ipa こんにちわ
koɴɲit͡ɕiɰa

$ kana2ipa ツイッター
tsɯittaː

$ kana2ipa コンパンジャンドラム
kompaɴʤandoɾamɯ
```

## Usage Library for Node.js

```javascript
const converter = require('converter')

console.log(converter.kana2ipa('コンニチワ'))
// koɴɲit͡ɕiɰa
console.log(converter.kana2ipa('こんぱんじゃんどらむ'))
// kompaɴʤandoɾamɯ
```

## Feature
- kana to X-SAMPA  
  - TBD



const converter = require('../src/converter')

describe('kana2ipa',()=>{
  test('[ん]の発音のテスト',async ()=>{
    expect(converter.kana2ipa('カンパン')).toBe('kampaɴ')
    expect(converter.kana2ipa('テンマド')).toBe('temːado')
    expect(converter.kana2ipa('ボンタン')).toBe('bontaɴ')
    expect(converter.kana2ipa('ハンノウ')).toBe('hanːoː')
    expect(converter.kana2ipa('ビンカン')).toBe('bʲiŋkaɴ') // ビの発音はbʲi̞
    expect(converter.kana2ipa('シンゴウ')).toBe('ɕiŋɡoː') //ɕiŋːoːがただしい？
    expect(converter.kana2ipa('ケンイチ')).toBe('keẽit͡ɕi')
  })
  test('ひらがなでも変換できることの確認',async ()=>{
    expect(converter.kana2ipa('かんぱん')).toBe('kampaɴ')
    expect(converter.kana2ipa('てんまど')).toBe('temːado')
    expect(converter.kana2ipa('ぼんたん')).toBe('bontaɴ')
    expect(converter.kana2ipa('はんのう')).toBe('hanːoː')
    expect(converter.kana2ipa('びんかん')).toBe('bʲiŋkaɴ') // ビの発音はbʲi̞
    expect(converter.kana2ipa('しんごう')).toBe('ɕiŋɡoː') //ɕiŋːoːがただしい？
    expect(converter.kana2ipa('けんいち')).toBe('keẽit͡ɕi')
  })
})




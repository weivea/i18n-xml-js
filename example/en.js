module.exports={
  helloWorld: 'hello world',
  haveHat: {
    // 基数
    cardinal: {
      // zero,
      one: 'I have {{d1}} hat',
      // two,
      // few,
      // many,
      other: 'I have {{d1}} hats'
    }
    
  },
  takeRight: {
    // 序数
    ordinal: {
      // zero,
      one: 'Take the twenty {{d1}}st right.',
      two: 'Take the {{d1}}nd right.',
      few: 'Take the {{d1}}rd right.',
      // many,
      other: 'Take the {{d1}}th right.'
    }
  },
  daysRang: {
    // 区间
    range: {
      other: '{{d1}} days'
      // one+two	,
      // one+few	,
      // one+many	,
      // one+other	,
      // two+few	,
      // two+many	,
      // two+other	,
      // few+few	,
      // few+many	,
      // few+other	,
      // many+many	,
      // many+other	,
      // other+one	,
      // other+two	,
      // other+few	,
      // other+many	,
      // other+other	
    }
  }
}
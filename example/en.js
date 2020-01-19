module.exports = {
  sting: {
    helloWorld: 'hello world'
  },
  plurals: {
    // 复数：基本复数
    cardinal: {
      haveHat: {
        zero: 'I have no hats',
        one: 'I have {{d1}} hat',
        // two,
        // few,
        // many,
        other: 'I have {{d1}} hats'
      }
    },
    // 复数：序数
    ordinal: {
      takeRight: {
        // zero,
        one: 'Take the twenty {{d1}}st right.',
        two: 'Take the {{d1}}nd right.',
        few: 'Take the {{d1}}rd right.',
        // many,
        other: 'Take the {{d1}}th right.'
      }
    },
    // 复数：区间
    range: {
      // xxx: {
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
      // }
    }
  }
};

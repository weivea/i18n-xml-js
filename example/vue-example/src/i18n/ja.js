const local = {
  // "array": {
  //   "cities": ["beijing", "shanghai", "jinan", "qingdao"]
  // },
  "plurals": {
    "cardinal": {
      "wastetime": {
        "one": (...arg) => `${arg[0]} 分`,
        "other": (...arg) => `${arg[0]} 分`
      }
    },
  //   "ordinal": {
  //     takeRight: {
  //       // zero,
  //       one: (...args)=>`Take the twenty ${args[0]}st right.`,
  //       two: (...args)=>`Take the ${args[0]}nd right.`,
  //       few: (...args)=>`Take the ${args[0]}rd right.`,
  //       // many,
  //       other: (...args)=>`Take the ${args[0]}th right.`
  //     }
  //   },
  //   "range":{
  //     days: {
  //       other: (...args)=>`${args[0]}–${args[0]} days`
  //     }
  //   }
  },
  "string": {
    "welcome_messages": (...arg) => `こんにちは, ${arg[0]}! ${arg[1]} 件のメッセージがあります.`,
    "app_name": "アプリケーション市場",
    // "pref_title_auto_update_market": "Update \"GetApps\" automatically",
    // "notif_button_update_all": "<font color=#ff6243>Update all</font>",
    // "btn_retry": "TRY AGAIN",
    // "btn_price": (...arg) => `￥${arg[0]}`,
    // "btn_progress": (...arg) => `${arg[0]}%%`,
    // "btn_pausable": "PAUSE",
    "user_agreement_msg": (...arg) => `To use the basic features of this service, you must agree that Xiaomi can collect, process, and use your personal data, including the personal data related to individual modules and services of GetApps. For example, Xiaomi will collect network information to optimize updating process, collect your comments and favorites to keep records of their content, collect activation time and paths to the items you view to improve the overall user experience, as well as collect other types of data in accordance with our Privacy Policy. Other types of data we collect and the data processing methods are described in our <a href=\"${arg[0]}\">Privacy Policy</a>. Agree?`
  }
};
export default local;
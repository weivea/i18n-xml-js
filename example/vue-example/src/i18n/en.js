const local = {
  "array": {
    "cities": ["beijing", "shanghai", "jinan", "qingdao"]
  },
  "plurals": {
    "cardinal": {
      "wastetime": {
        "one": (...arg) => `${arg[0]} minute`,
        "other": (...arg) => `${arg[0]} minutes`
      }
    },
    "ordinal": {
      takeRight: {
        // zero,
        one: (...args)=>`Take the twenty ${args[0]}st right.`,
        two: (...args)=>`Take the ${args[0]}nd right.`,
        few: (...args)=>`Take the ${args[0]}rd right.`,
        // many,
        other: (...args)=>`Take the ${args[0]}th right.`
      }
    },
    "range":{
      days: {
        other: (...args)=>`${args[0]}–${args[0]} days`
      }
    }
  },
  "string": {
    "welcome_messages": (...arg) => `Hello, ${arg[0]}! You have ${arg[1]} new messages.`,
    "app_name": "GetApps",
    "pref_title_auto_update_market": "Update \"GetApps\" automatically",
    "notif_button_update_all": "<font color=#ff6243>Update all</font>",
    "btn_retry": "TRY AGAIN",
    "btn_price": (...arg) => `￥${arg[0]}`,
    "btn_progress": (...arg) => `${arg[0]}%%`,
    "btn_pausable": "PAUSE",
    "user_agreement_msg": (...arg) => `To use the basic features of this service, you must agree that us can collect, process, balabalbalablabalbalbalabal <a href=\"${arg[0]}\">Privacy Policy</a>. Agree?`
  }
};
export default local;
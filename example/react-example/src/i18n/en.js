const local = {
  "array": {
    "citys": ["BeiJing", "ShangHai", "JiNan", "QingDao"]
  },
  "plurals": {
    "cardinal": {
      "wastetime": {
        "one": (...arg) => `${arg[0]} minute`,
        "other": (...arg) => `${arg[0]} minutes`
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
    "user_agreement_msg": (...arg) => `To use the basic features of this service, you must agree that us can collect, process, and use your personal data, balabalbabalbalab, <a href=\"${arg[0]}\">Privacy Policy</a>. Agree?`
  }
};
export default local;
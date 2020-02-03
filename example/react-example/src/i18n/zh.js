const local = {
  "array": {
    "citys": ["北京", "上海", "济南", "青岛"]
  },
  "plurals": {
    "cardinal": {
      "wastetime": {
        "one": (...arg) => `${arg[0]} 分钟`,
        "other": (...arg) => `${arg[0]} 分钟`
      }
    }
  },
  "string": {
    "welcome_messages": (...arg) => `你好, ${arg[0]}! 你有 ${arg[1]} 新消息.`,
    "app_name": "应用市场",
    "pref_title_auto_update_market": "自动更新 \"应用市场\"",
    "notif_button_update_all": "<font color=#ff6243>更新全部</font>",
    "btn_retry": "再试一次",
    "btn_price": (...arg) => `￥${arg[0]}`,
    "btn_progress": (...arg) => `${arg[0]}%%`,
    "btn_pausable": "暂停",
    "user_agreement_msg": (...arg) => `To 要使用本应用基础服务, 你需要同意本应用搜集和使用您的个人信息, 巴拉巴拉吧啦 <a href=\"${arg[0]}\">隐私政策</a>. 您是否同意?`
  }
};
export default local;
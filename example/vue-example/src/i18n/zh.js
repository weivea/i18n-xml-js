const local = {
  "array": {
    "cities": ["北京", "上海", "济南", "青岛"]
  },
  "plurals": {
    "cardinal": {
      "wastetime": {
        "other": (...arg) => `${arg[0]} 分钟`
      }
    },
    "ordinal": {
      takeRight: {
        // zero,
        // many,
        other: (...args)=>`选择第 ${args[0]} 个 权利.`
      }
    },
    "range":{
      days: {
        other: (...args)=>`${args[0]}–${args[1]} 天`
      }
    }
  },
  "string": {
    "welcome_messages": (...arg) => `你好, ${arg[0]}! 你有 ${arg[1]} 条消息.`,
    "app_name": "应用商店",
    "pref_title_auto_update_market": "自动更新 \"应用商店\"",
    "notif_button_update_all": "<font color=#ff6243>升级所有应用</font>",
    "btn_retry": "再试一下",
    "btn_price": (...arg) => `￥${arg[0]}`,
    "btn_progress": (...arg) => `${arg[0]}%%`,
    "btn_pausable": "暂停",
    "user_agreement_msg": (...arg) => `好长一段文字呀，啦啦啦阿拉蕾 <a href=\"${arg[0]}\">快快快快快快</a>. 同意吗?`
  }
};
export default local;
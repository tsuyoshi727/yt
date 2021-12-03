module.exports = {
    "id": "zqyd",
    "name": "晶彩天气看看赚",
    "keys": ["jctqCookie","jctqCookie2",],
    "author": "@tom",
    "settings": [{
      "id": "zqydSuffix",
      "name": "当前账号",
      "val": "1",
      "type": "number",
      "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
    }, {
      "id": "zqydCount",
      "name": "账号个数",
      "val": "3",
      "type": "number",
      "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
    }, {
      "id": "zqydXH",
      "name": "循环获取ck",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydTXTX",
      "name": "txtx",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydSC",
      "name": "sc",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydnotifyttt",
      "name": "推送控制",
      "val": "1",
      "type": "number",
      "desc": "0关闭，1推送,默认12点以及23点推送"
    }, {
      "id": "zqydnotifyInterval",
      "name": "通知控制",
      "val": "2",
      "type": "number",
      "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
    }, {
      "id": "zqydMinutes",
      "name": "推送-通知 分钟控制",
      "val": "10",
      "type": "number",
      "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
    }],
    "repo": "https://gitee.com/tom210120/tom/raw/master/ZQ/zq.js",
    "icons": ["https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg", "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg"],
    "script": "https://gitee.com/tom210120/tom/raw/master/ZQ/zq.js",
    "icon": "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg",
    "favIcon": "mdi-star-outline",
    "favIconColor": "grey",
    "datas": [{
      "key": "jctqCookie",
      "val": "uid=55747365&version_code=839&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl6-Fx2Kx3YFrhYyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdm2qEjI6Xr6mmapqGcXY&zqkey_id=fa7555c42dafe45070d31db40848fbae"
    }, {
      "key": "jctqCookie2",
      "val": ""
    }, {
      "key": "jctqCookie3",
      "val": ""
    }],
    "sessions": [],
    "isLoaded": true
  }

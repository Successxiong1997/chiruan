//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myvalue:"",
    code:"",
    uuid:""
  }
  ,
  input(e) {
    var value = e.detail.value;//input的value
    this.setData({
      myvalue: value
    });
  },
  markertap(){//生成按钮
  var thismy=this;//外层this

    wx.getSetting({//查看用户是否已经点击授权
      success(res) {
        if (res.authSetting['scope.userInfo']) {//已点授权true

          //第二次进来点击后判断uuid是否存在
          var er_loginuuid = wx.getStorageSync('loginuuid');//获取uuid
          if (wx.getStorageSync('loginuuid')){//先判断uuid
            if (thismy.data.myvalue != "" && thismy.data.myvalue != " " && thismy.data.myvalue != "  " && thismy.data.myvalue != "   ") {//在判断输入不为空
                wx.request({//发起请求传给后台
                  url: 'https://wcif.love-ysh.com/mini/index/savename',
                  method: "post",
                  data: {
                    uuid: er_loginuuid,
                    name: thismy.data.myvalue
                  }
                }) 
                wx.navigateTo({//跳转下一个页面
                  url: '../logs/logs?id=' + thismy.data.myvalue//跳转自二页面
                })
            } else {//输入为空弹窗
              wx.showToast({
                title: '请先输入名字',
                icon: 'loading',
                duration: 1000
              })
            }
            return;
          }

        //第一次进来获取用户信息并得到uuid
          wx.getUserInfo({
            success: function (res) {
              var encryptedData = res.encryptedData;
              var iv = res.iv;
              //发起网络请求
              wx.request({
                url: 'https://wcif.love-ysh.com/mini/index/index',
                method:"post",
                data: {
                  code: thismy.data.code,
                  encryptedData: encryptedData,
                  iv: iv,
                  signature: res.signature,
                  rawData: res.rawData,
                },
                success:(res)=>{
                  let _res = res.data;
                  if (_res.code != 1){
                    console.log("用户不存在");
                    return;  
                  }
                 wx.setStorageSync('loginuuid', _res.uuid);//设置后台返回的uuid
                 var loginuuid = wx.getStorageSync('loginuuid');//得到uuid
                  wx.request({
                    url: 'https://wcif.love-ysh.com/mini/index/savename',
                    method: "post",
                    data: {
                      uuid: loginuuid,
                      name: thismy.data.myvalue
                    }
                  }) 
                }
              })  

   
            }
          })
        }
      }
    })
  },
  aaa(){
    var thismm = this;
    wx.login({
      success(res) {
        if (res.code) {
          wx.setStorageSync('logincode', res.code)
          //发起网络请求
          thismm.setData({
            code: res.code
          });
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  }
  ,
  onLoad(){
    var thismm = this;
    thismm.aaa()

  }
  ,
  onShareAppMessage() {//转发的配置
    return {
      title: "我与西博会进出口展的小故事",
      path: "pages/index/index"
    }
  }
})
  

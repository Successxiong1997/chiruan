Page({
  data: {
    value: "",//第一个页面的值
    off: ""//随机数
  }

  ,
  onLoad(options) {
    this.setData({
      value: options.id //得到首页input输入的值
    })
    var num = Math.ceil(Math.random() * 40);
    this.setData({
      off: num
    }) //执行随机数
    this.hecheng();
  },
  hecheng() {
    //console.log(this.data.off);
    var ctx = wx.createCanvasContext('customCanvas');
    //画布宽高
    var _w = 729;
    var _h = 679;
    var moban = this.data.off; //模拟参数，到时候替换动态参数
    var wenzi = this.data.value; //模拟参数，到时候替换动态参数

    //根据第一个页面传过来的模板参数调用对应的模板参数
    //模板参数是文字的x和y轴的位置
    var _ar = [{ //因为是随机数是从1开始，这个下标为0，所以加一个空的{}

      },
      //1 - 5
      {
        x: _w / 4.7,
        y: _h / 4.5,
        x2: _w / 2.6,
        y2: _h / 2.05,
        x3: _w / 2.565,
        y3: _h / 1.2,
      },
      {
        x: _w / 2.5,
        y: _h / 4.9,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 2.4,
        y: _h / 4.9,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 2.4,
        y: _h / 4.3,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 6.5,
        y: _h / 2.45,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },


      // 6 - 10
      {
        x: _w / 6.6,
        y: _h / 3.5,
        x2: _w / 3.4,
        y2: _h / 2.7,
        x3: _w / 2.565,
        y3: _h / 1.2,
      },
      {
        x: _w / 5.3,
        y: _h / 3.5,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 2.75,
        y: _h / 4.5,
        x2: _w / 9,
        y2: _h / 2.05,
        x3: _w / 2.565,
        y3: _h / 1.2,
      },
      {
        x: _w / 5,
        y: _h / 4.3,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 4.3,
        y: _h / 4.2,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },


      // 11 - 15
      {
        x: _w / 2.9,
        y: _h / 4.3,
        x2: _w / 4.1,
        y2: _h / 2.45,
        x3: _w / 2.565,
        y3: _h / 1.2,
      },
      {
        x: _w / 3.4,
        y: _h / 3.5,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 3.4,
        y: _h / 4.5,
        x2: _w / 6.2,
        y2: _h / 2.5,
        x3: _w / 7.7,
        y3: _h / 1.7,
        x4: _w / 2.565,
        y4: _h / 1.2,
      },
      {
        x: _w / 4.9,
        y: _h / 3.35,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 7.1,
        y: _h / 2.9,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },


      // 16 - 20

      {
        x: _w / 3.8,
        y: _h / 3.3,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },

      {
        x: _w / 3.1,
        y: _h / 3.4,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },

      {
        x: _w / 3.8,
        y: _h / 2.6,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },

      {
        x: _w / 5,
        y: _h / 3.8,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },

      {
        x: _w / 4.3,
        y: _h / 3,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 3.5,
        y: _h / 2.15,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 8,
        y: _h / 2.15,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 5.2,
        y: _h / 2.08,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 2.95,
        y: _h / 2.08,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 3.65,
        y: _h / 2.25,
        x2: _w / 2.65,
        y2: _h / 1.14,
      },
      //26-30
      {
        x: _w / 2.565,
        y: _h / 1.2,
      },
      {
        x: _w / 4.6,
        y: _h / 2.57,
        x2: _w / 2.65,
        y2: _h / 1.14,
      },
      {
        x: _w / 4.8,
        y: _h / 3.6,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 5.2,
        y: _h / 3.3,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 4.2,
        y: _h / 2,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },

      // 31-35
      {
        x: _w / 2.8,
        y: _h / 2.9,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 1.27,
        y: _h / 3.7,
        x2: _w / 4.4,
        y2: _h / 2.6,
        x3: _w / 2.565,
        y3: _h / 1.2,
      },
      {
        x: _w / 1.38,
        y: _h / 4.3,
        x2: _w / 6.4,
        y2: _h / 1.73,
        x3: _w / 2.565,
        y3: _h / 1.2,
      },
      {
        x: _w / 1.18,
        y: _h / 3.2,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 8,
        y: _h / 2,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      //36-40
      {
        x: _w / 8,
        y: _h / 5.5,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 7.2,
        y: _h / 2.6,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
      {
        x: _w / 6,
        y: _h / 3.4,
        x2: _w / 5.8,
        y2: _h / 1.9,
        x3: _w / 2.565,
        y3: _h / 1.2,
      },
      {
        x: _w / 4,
        y: _h / 3.7,
        x2: _w / 6.2,
        y2: _h / 2.6,
        x3: _w / 2.565,
        y3: _h / 1.2,
      },
      {
        x: _w / 7.2,
        y: _h / 2.8,
        x2: _w / 2.565,
        y2: _h / 1.2,
      },
    ][moban]; //随机数

    //渲染画布
    ctx.setFillStyle('#57627d'); //文字颜色
    // ctx.setFontSize(40) //设置字体大小，默认10
    ctx.font = 'normal bold 40px sans-serif';
    ctx.drawImage('../../img/bg' + moban + '.png', 0, 0, _w, _h)

    //wenzi第一个页面传过来用户输入的值
    ctx.textAlign = "center"; //文字右对齐
    ctx.fillText(wenzi, _ar.x, _ar.y) //x1,y1绘制文本
    if (_ar.x2) ctx.fillText(wenzi, _ar.x2, _ar.y2) //x2,y2绘制文本
    if (_ar.x3) ctx.fillText(wenzi, _ar.x3, _ar.y3) //x3,y3绘制文本
    if (_ar.x4) ctx.fillText(wenzi, _ar.x4, _ar.y4) //x4,y4绘制文本
    ctx.draw();
  },
  baocuncanvas() {//保存canvas内容为图片
    var ctx = wx.createCanvasContext('customCanvas');
    wx.canvasToTempFilePath({//选取临时canvas路劲
      fileType: 'jpg',
      canvasId: 'customCanvas',
      success(res) {
        wx.authorize({
          scope: 'scope.writePhotosAlbum',
          success() {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success() {
                wx.showToast({
                  title: '图片保存成功'
                })
              }
            })
          },
          fail() {//点击取消照片授权后进入
            wx.showModal({//重新拉起照片授权
              title: '提示',
              content: '关闭授权将无法保存照片',
              success: (res) => {
                if (res.confirm) {
                  wx.openSetting({})
                }
              }
            })
          }
        })
      },
    }, this)
  },
  zlyc() {//点击再来一次生成随机数
    var num = Math.ceil(Math.random() * 40);
    this.setData({
      off: num
    })
    this.hecheng();
    //console.log(this.data.off)
  },
  onShareAppMessage: function() {//分享页面
    return {
      title: '我与西博会进出口展的小故事',
      path: "pages/index/index"
    }
  }
})
// Filename: counter.js
var QRCode = require('weapp-qrcode.js')
var qrcode;
//获取 系统信息.窗口的的高度
const W = wx.getSystemInfoSync().windowWidth;
const rate = 750.0 / W;
const qrcodeWidth = 500 / rate;

Page({
// 轮播图
    data: {
        QRCode: '',
        code_w: qrcodeWidth,
    },

    onLoad: function () {
        console.log('onLoad start')
        qrcode = new QRCode('canvas', {
            QRcode: '',
            width: qrcodeWidth,
            height: qrcodeWidth,
            colorDark: "#29c6e8",
            colorLight: "white",
            correctLevel: QRCode.CorrectLevel.H,
        });
    },

    //读取输入内容
    inputChange: function (e) {
        var value = e.detail.value
        this.setData({
            QRCode: value
        })
        console.log(this.data.QRCode)
    },

    //传入字符生成QRCODE
    tapHandler: function () {
        qrcode.makeCode(this.data.QRCode)
        console.log(this.data.QRCode)
    },
})

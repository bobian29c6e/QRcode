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
        text:'',
        QRCode: '',
        code_w: qrcodeWidth,
        navTab: ["01", "02", "03", "04"],
        currentNavtab: "0",
        imgUrls: [
            '/image/sese (1).jpg',
            '/image/sese (2).jpg',
            '/image/sese (3).jpg',
            '/image/sese (4).jpg',
            '/image/sese (5).jpg',
            '/image/sese (6).jpg',
            '/image/sese (7).jpg',
            '/image/sese (8).jpg',
            '/image/sese (9).jpg',
            '/image/sese (10).jpg',
            '/image/sese (11).jpg',
            '/image/sese (12).jpg',
            '/image/sese (13).jpg',

        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
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
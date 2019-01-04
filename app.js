//app.js
App({
    onLaunch: function () {
       this.globalData.audioCtx = wx.createInnerAudioContext()
    },
    globalData: {
       userInfo: null,
       audioCtx:null
    }
})
// page/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg:'初始化测试数据'
    },
    onParents() {
        console.log("parents")
    },
    onChildren(){
        console.log("child")
    },
    toLogs(){
        wx.redirectTo({
            url:'/page/logs/logs',
        })
    },
    getUI(reg){
        console.log(reg)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('onLoad()');
        // 消息提示框
        // wx.showToast({
        //   title: 'hello world',
        // })
        // 消息加载框
        // wx.showLoading({
        //   title: 'hello world',
        // })
        // console.log(this.data.msg)
        // setTimeout(()=>{
        //     this.setData({msg:'修改后的测试数据'
        // })
        // console.log(this.data.msg)
        // },2000)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log("页面初次渲染完成")
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("页面显示")
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log("页面隐藏")
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log("页面卸载")
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log("页面下拉")
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log("页面上拉")
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        console.log("页面分享")
    }
})
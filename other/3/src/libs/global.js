exports.Global = {
    loading: false,
    winHeight: 0,
    winWidth: 0,
    resizeWidth: function () {
        var that = this
        var win = window
        var doc = document
        var root = doc.documentElement

        that.winWidth = root.clientWidth || win.innerWidth || doc.body.clientWidth
        that.winHeight = root.clientHeight || win.innerHeight
    }
}

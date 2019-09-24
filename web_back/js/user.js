//用户用到的函数
var user = {
    /**
     * 用户登录
     * @param {*} username 用户名
     * @param {*} password 密码
     * @param {*} callback 回调函数
     */
    login: function (username, password, callback) {
        $.post(UrlList.user_login, {
            user_name: username,
            password: password
        }, function (res) {
            callback(res);
        })
    },
    /**
     * 用户退出
     * @param {*} callback 回调函数
     */
    logout: function (callback) {
        $.post(UrlList.user_logout, function (res) {
            callback(res);
        })
    },
    /**
     * 获取用户信息
     * @param {*} callback 回调函数
     */
    getUser: function (callback) {
        $.get(UrlList.user_getUser, function (res) {
            callback(res);
        })
    },
    //个人中心用户信息
    userInfo: function (callback) {
        $.get(UrlList.user_getUserInfo, function (res) {
            callback(res);
        })
    },
    //个人中心编辑用户信息
    userEdit: function (fd, callback) {
        $.ajax({
            url: UrlList.user_edit,
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function (res) {
                callback(res);
            }
        })
    }
}
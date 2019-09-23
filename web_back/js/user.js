//用户用到的函数
var user = {
    /**
     * 用户登录
     * @param {*} username 用户名
     * @param {*} password 密码
     * @param {*} callback 回调函数
     */
    login: function(username,password,callback) {
        $.post(userUrlList.user_login,{
            user_name : username,
            password : password
        },function (res) {
            callback(res);
        })
    },
    /**
     * 用户退出
     * @param {*} callback 回调函数
     */
    logout: function(callback) {
        $.post(userUrlList.user_logout,function (res) {
            callback(res);
        })
    },
    /**
     * 获取用户信息
     * @param {*} callback 回调函数
     */
    getUser: function(callback) {
        $.get(userUrlList.user_getUser,function (res) {
            callback(res);
        })
    },
}
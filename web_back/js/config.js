//默认地址和端口
var url = 'http://localhost:8000';
//user调用的接口地址
var UrlList = {
    //登录
    user_login: url + '/admin/login',
    //登出
    user_logout: url + '/admin/logout',
    //获取信息
    user_getUser: url + '/admin/getuser',
    //用户信息
    user_getUserInfo: url + '/admin/userinfo_get',
    //编辑用户信息
    user_edit: url + '/admin/userinfo_edit',
    //搜索
    category_show: url + '/admin/category_search',
    //删除
    category_del: url + '/admin/category_delete',
    //添加
    category_add: url + '/admin/category_add',
    //编辑
    category_edit: url + '/admin/category_edit'
}
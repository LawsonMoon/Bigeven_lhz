var article = {
    /**
     * 获取类别列表
     * @param {*} name 
     * @param {*} slug 
     * @param {*} callBack 
     */
    show: function (callBack) {
        $.get(UrlList.category_show, function (res) {
            callBack(res);
        })
    },
    /**
     * 删除类别
     * @param {*} id 
     * @param {*} callBack 
     */
    del: function (id, callBack) {
        $.post(UrlList.category_del, {
            id: id
        }, function (res) {
            callBack(res);
        })
    },
    /**
     * 添加类别
     * @param {*} name 
     * @param {*} slug 
     * @param {*} callBack 
     */
    add: function (name, slug, callBack) {
        $.post(UrlList.category_add, {
            name: name,
            slug: slug
        }, function (res) {
            callBack(res);
        })
    },
    edit: function (id, name, slug, callBack) {
        $.post(UrlList.category_edit, {
            id: id,
            name: name,
            slug: slug
        }, function (res) {
            callBack(res);
        })
    },
}
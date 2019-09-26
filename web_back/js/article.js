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
    /**
     * 
     * @param {*} id 
     * @param {*} name 
     * @param {*} slug 
     * @param {*} callBack 
     */
    edit: function (id, name, slug, callBack) {
        $.post(UrlList.category_edit, {
            id: id,
            name: name,
            slug: slug
        }, function (res) {
            callBack(res);
        })
    },
    /**
     * 
     * @param {*} paramObj 
     * @param {*} callBack 
     */
    a_search: function (paramObj, callBack) {
        $.get(UrlList.article_search, paramObj, function (res) {
            callBack(res);
        })
    },
    /**
     * 
     * @param {*} id 
     * @param {*} callBack 
     */
    a_del: function (id, callBack) {
        $.get(UrlList.article_del, {
            id: id
        }, function (res) {
            callBack(res);
        })
    }
}
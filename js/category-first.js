$(function () {

    /*
        1.发送ajax请求 请求一级分类的数据
        2.将数据渲染到页面中
    */

    $.ajax({
        url: `${APP.baseUrl}/category/queryTopCategoryPaging`,
        type: 'get',
        data: {
            page: 1,
            pageSize: 10
        },
        success: function (response) {
            var html = template('categoryFirstTpl', response);
            $('#categoryFirstBox').html(html);
        }
    })

});
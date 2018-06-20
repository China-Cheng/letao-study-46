$(function () {
    $.ajax({
        url:`${APP.baseUrl}/category/querySecondCategoryPaging`,
        type:'get',
        data:{
            page:1,
            pageSize:10
        },
        success:function (msg) {
            var html = template('categorySecondTpl',{
                list:msg,
                api:APP.baseUrl
            })
            $('#categorySecondBox').html(html);
        }

    })
})
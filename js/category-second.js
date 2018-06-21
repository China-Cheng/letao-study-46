$(function () {
    // 获取二级分类页面的数据，渲染到页面
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

    // 获取一级分类页面的数据，渲染到页面
    $.ajax({
        type:'get',
        data:{
            page:1,
            pageSize:10000
        },
        url:`${APP.baseUrl}/category/queryTopCategoryPaging`,
        success:function (msg) {
            var html = template('categoryFirstTpl',msg);
            $("#categoryFirstBox").html(html);
        }
    })


    var brandLogo = '';

    // 文件上传第三步 插件调用
    $('#fileUpload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            console.log(data);
            // 存储图片地址
            brandLogo = data._response.result.picAddr;
            // 拼接图片url
            var imgUrl= APP.baseUrl + data._response.result.picAddr;
            // 将图片渲染到页面中
            $("#imgPreview").attr("src",imgUrl);
        }
    });

    // 添加二级分类
    $('#categorySecondadd').on('click',function () {
        var result = $('#categoryForm').serializeToJson();
        console.log(result)
        var brandName = result.brandName;
        var categoryId = $('#categoryFirstBox').val();
        var hot = 1;
        $.ajax({
            url:`${APP.baseUrl}/category/addSecondCategory`,
            type:'post',
            data:{
                brandName,
                categoryId,
                hot,
                brandLogo
            },
            success:function (msg) {
                if (msg.success) {
                    location.reload();
                } else {
                    console.log(msg.message)
                }
            }
        })
    })
})
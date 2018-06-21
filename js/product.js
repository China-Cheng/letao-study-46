$(function () {
    // 渲染一级分类品牌
    $.ajax({
        url:`${APP.baseUrl}/category/queryTopCategoryPaging`,
        type:'get',
        data:{
            page:1,
            pageSize:100000
        },
        success:function (msg) {
            console.log(msg)
            var html = template('productFirstTpl',msg);
            $('#productFirstBox').html(html);
        }
    })

    // 文件上传第三步 插件调用
    var brandLogo = '';
    $('#fileUpload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            // 存储图片地址
            brandLogo = data._response.result.picAddr;
            // 拼接图片url
            var imgUrl= APP.baseUrl + data._response.result.picAddr;
        }
    });

    // 给添加绑定点击事件，发送Ajax请求
    $('#addProduct').on('click',function () {
        // 获取表单内的所有数据
        
        var brandId =$('#productFirstBox').val();
        var result = $('#productForm').serializeToJson();
        console.log(result)
        var proName = result.proName;
        var oldPrice = result.oldPrice;
        var price = result.price;
        var proDesc = result.proDesc;
        var size = result.size;
        var statu = 1;
        var num = result.num;
        // 连接口，添加数据
        $.ajax({
            url:`${APP.baseUrl}/product/addProduct`,
            type:'post',
            data:{
                proName,
                oldPrice,
                price,
                proDesc,
                size,
                statu,
                num,
                brandId
            },
            success:function (msg) {
                console.log(msg)
                if (msg.success) {
                    // location.reload();
                    console.log(msg)
                } else {
                    alert(msg.message)
                }
            }
        })
    })

    // 查询数据列表，渲染数据到页面
    $.ajax({
        type:'get',
        url:`${APP.baseUrl}/product/queryProductDetailList`,
        data:{
            page:1,
            pageSize:5
        },
        success:function (msg) {
            console.log(msg)
             var html = template('productSecondTpl',msg);
            $('#productSecondBox').append(html);
        }
    })

    // 为下架绑定事件
    $('productSecondBox').on('click','productBtn',function () {
        alert(1)
    })
})
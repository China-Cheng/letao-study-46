// 判断用户是否登录
$.ajax({   
    async:false, 
    type:'get',
    url:`${APP.baseUrl}/employee/checkRootLogin`,
    success:function (msg) {
        if (msg.error) {
            location.href = 'login.html';
        }
    }

})
$(function () {
    // 查询用户，展示用户
    
    $.ajax({
        type:'get',
        url:`${APP.baseUrl}/user/queryUser`,
        data:{
            page:1,
            pageSize:100
        },
        success:function (response) {
            var html = template('userTpl',response);
            $('#userBox').append(html);
        }
    });

    // 更改用户状态
    $('#userBox').on('click','.changeStatus',function () {
        var id = $(this).data('user-id');    
        var isDelete = $(this).data('user-isdelete');  
        var that = $(this)
        $.ajax({
            type:'post',
            url:`${APP.baseUrl}/user/updateUser`,
            data:{
                id:id,
                isDelete:isDelete == 1? 0 : 1
            },
            success:function (response) {
                if (response.success) {
                    that.parents('tr').remove();
                    location.reload();
                } else {
                    alert(response.message)
                }
            }
        })  
    })
})

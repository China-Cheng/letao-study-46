
$(function(){

    var navLi = $('.navs li')

    navLi.on('click',function(){

        $(this).find('ul').slideToggle();

    });

});


// 全局配置
var APP = {
    // 接口的基础配置
    baseUrl:'http://fullstack.net.cn:3000'
}




// 将表单数据以 json 的形式返回 (jouery扩展方法)

$.fn.serializeToJson = function () {

    // serializeArray() 获取表单里的数据 通过表单里的name值获取的
    var formArray = this.serializeArray();

    // result = {username:'zhangsna',password:123}
    var result = {};

    formArray.forEach(function(item){
        result[item.name] = item.value;

    });

    return result;
}


// 封装定义获取id的方法
function getUrlParams(name) {
    // 通过 location.srarch 获取地址栏  slice 拷贝数组
    var search = location.search.slice(1);
    // 通过split分隔
    var ary1 = search.split('&');

    for(var i = 0; i < ary1.length; i++) {
        var ary2 = ary1[i].split('=');
        if(ary2[0] == name) {
            return ary2[1];
        }
    }

    return -1;

}

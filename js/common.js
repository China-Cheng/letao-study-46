$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});
}
// 全局配置
var APP = {
    // 接口的基础配置
    baseUrl:'http://fullstack.net.cn:3000'
}

});

// 将表单数据已JSON的格式返回
$.fn.serializeToJson = function () {

    var formAry = this.serializeArray();

    var result = {};

    formAry.forEach(function (item) {

        result[item.name] = item.value;
    })
    return result;
}

// 获取地址栏中的参数
function  getUrlParams(name) {
    // 截取第一个之后的所有数据
    var search = location.search.slice(1);
    // 用&符号分割成数组
    var ary = search.split('&');
    // 循环这个数组
    for (var i = 0; i < ary.length; i++) {
        // 再用=把每一个单元分割为数组
        var ary2 = ary[i].split('=');
        // 如果数组中的数据等于传进来的数据
        if (ary2[0] == name) {
            // 那么传出去
            return ary2[1];
        }
    }
    // 否则传出-1
    return -1;
}   
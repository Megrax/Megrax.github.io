/*
 * @Author: Megrax
 * @Date: 2020-12-07 19:25:27
 * @LastEditTime: 2020-12-09 19:06:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Blog-FE/action.js
 */


$(window).scroll(function () {
    //获取距离页面顶部的距离
    let toTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    //div距离顶部的距离
    if (toTop >= 800) {
        $('#shangxia2').removeClass('hidden');
    } else {
        $('#shangxia2').addClass('hidden');
    }
});

let cook = document.cookie;
			if (cook !== "username=admin") {
				window.location.replace("/login.html");
			}
			$(function () {
				// 默认速度
				$("#gotop1").click(function () {
					TweenMax.to(window, 1, { scrollTo: 0 });
				});
			});
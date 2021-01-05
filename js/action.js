/*
 * @Author: Megrax
 * @Date: 2020-12-07 19:25:27
 * @LastEditTime: 2020-12-09 19:06:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Blog-FE/action.js
 */

// $(window).scroll(function(){
//     let win_h = $(window).scrollTop();
//     let nav_h = $("header").height();
//     if(win_h == nav_h){
//         $("header").css("display",none);
//     }
// });

$(window).scroll(function () {
    //获取距离页面顶部的距离
    let toTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    console.log(toTop);
    //div距离顶部的距离
    if (toTop >= 800) {
        $('#shangxia2').removeClass('hidden');
        $("header").removeClass('hidden');
    } else if (toTop === 0) {
        $("header").addClass('hidden');
        $('#shangxia2').addClass('hidden');
    } else {
        $("header").removeClass('hidden');
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
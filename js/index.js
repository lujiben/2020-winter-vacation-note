$(function () {

  // $("a[href*='#']").click(function (e) {
  //   // 禁止默认事件
  //   e.preventDefault();
  //   return false;
  // })

  $('.nav a').click(function(e) {
    // 获取当前窗口的高度
    var winH = $(window).height();
    // 获取自定义属性
    var target = $(this).attr('data-index');
    var finalH = 0;
    finalH = winH * target;

    $('body,html').animate({
      scrollTop: finalH
      },600,function(){
    })
    e.preventDefault();
    return false;
  })

  $('.scroll-tip').click(function () {
    $('.skill-section .fade').addClass('fade-in');
  })

})
$(function () {
  $("a[href='#']").click(function (e) {
    // 禁止默认事件
    e.preventDefault();
    return false;
  })

  $('.about').click(function() {
    // 获取当前窗口的高度
    var winH = $(window).height();
    $('body,html').animate({
      scrollTop: winH
    },600,function(){

    })
  })

})
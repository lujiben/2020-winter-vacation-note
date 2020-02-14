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

  // 点击切换按钮
  $('.scroll-tip').click(function () {
    var index = $(this).attr('data-index');
    var winH = $(window).height();
    var name = $(this).attr('next-name');
    if(index < 5) {
      // 点击的是前四个按钮
      // 通过按钮的next-name属性，获取下一部分的class值，并给他加上fade-in这个class，触发过渡效果
      $('body,html').animate({
        scrollTop: winH * index
      },600, function() {})
      if(name) {
        $(name).find('.fade').addClass('fade-in');
      }
    }else {
      // 点击的是最后一个按钮
      // 返回顶部，并且移除各个部分的的fade-in这个class，方便再次展示效果
      $('body,html').animate({
        scrollTop: 0
      },600, function() {})
      $('.fade').removeClass('fade-in')
    }
  })

})
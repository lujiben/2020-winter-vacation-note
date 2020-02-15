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
    // 获取该模块的名字，增加过渡效果
    var name = $(this).attr('section-name');
    var finalH = 0;
    finalH = winH * target;
    // target ? viewScroll('body,html', finalH, true) : viewScroll('body,html', finalH, false);
    // =================
    // if(target) {
    //   // target为true时，说明点击了1234，此时需要固定
    //   viewScroll('body,html', finalH, true)
    // }else {
    //   // 点击了home
    //   viewScroll('body,html', finalH, false)
    // }
    // 通过target * 1把str类型的数据转为num，方便后续判断
    // target为0，表示回到首页，导航栏不固定，对应false
    // target为1234时，表示向下滑动，导航栏固定，对应true
    viewScroll('body,html', finalH, target * 1);
    if(name) {
      $(name).find('.fade').addClass('fade-in');
    }
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
      viewScroll('body,html', winH * index, true);
      if(name) {
        $(name).find('.fade').addClass('fade-in');
      }
    }else {
      // 点击的是最后一个按钮
      // 返回顶部，并且移除各个部分的的fade-in这个class，方便再次展示效果
      viewScroll('body,html', 0, false);
      $('.fade').removeClass('fade-in');
    }
  })

  // 统一同理滚动,el:要滚动的元素，height：滚动的值,fixed:是否需要固定导航栏
  function viewScroll(el, height, fixed) {
    $(el).animate({
      scrollTop: height
    },600, function() {
      // 判断是否需要固定导航栏
      fixedNav(fixed)
    })
  }
  
  // 固定导航栏,flag表示是否需要固定
  function fixedNav(flag) {
    if(flag) {
      $('.section-header .nav').addClass('fixed');
    }else {
      $('.section-header .nav').removeClass('fixed');
    }
  }

})
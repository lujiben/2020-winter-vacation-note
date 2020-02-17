$(function () {
  
  // 全局变量，表示当前模块，每次页面滚动时都要更新这个值
  var viewIndex = 0;
  // 存储各个模块的名字
  var viewName = ['home-section', 'about-section', 'works-section', 'skill-section', 'contact-section'];

  // 点击导航栏的处理
  $('.nav a').click(function(e) {
    // 获取当前窗口的高度
    var winH = $(window).height();
    // 获取自定义属性
    var target = $(this).attr('data-index');
    // 获取该模块的名字，增加过渡效果
    var name = $(this).attr('section-name');
    var finalH = 0;
    finalH = winH * target;
    // 通过target * 1把str类型的数据转为num，方便后续判断
    // target为0，表示回到首页，导航栏不固定，对应false
    // target为1234时，表示向下滑动，导航栏固定，对应true
    viewScroll('body,html', finalH, target * 1);
    // 从导航栏获取当前页面的模块索引
    viewIndex = target;
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
      ++ viewIndex
      if(name) {
        $(name).find('.fade').addClass('fade-in');
      }
    }else {
      // 点击的是最后一个按钮
      // 返回顶部，并且移除各个部分的的fade-in这个class，方便再次展示效果
      viewScroll('body,html', 0, false, 0);
      viewIndex = 0;
      $('.fade').removeClass('fade-in');
    }
  })

  // 统一同理滚动,el:要滚动的元素，height：滚动的值,
  // fixed:是否需要固定导航栏,isAdd:是否需要增加viewIndex的值
  function viewScroll(el, height, fixed) {
    // 判断是否需要固定导航栏
    fixedNav(fixed);
    $(el).animate({
      scrollTop: height
    },600, function() {
      console.log(viewIndex)
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

  // 各部分的过渡效果，通过fade-in这个class来触发
  function toggleFadeIn () {
    // code here
  }

  // 处理页面滚动
  window.onscroll = throttleFn(function () {

  }, 50);

  // 节流函数
  function throttleFn(fn, delay) {
    var timer = null;
    return function () {
      var that = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(that, args)
      }, delay)
    }
  }

  // ff浏览器的滚动事件是DOMMouseScroll
  $(document).on('mousewheel DOMMouseScroll', function(e) {
    // 保存js原生事件的参数
    var e0 = e.originalEvent,
    // 根据值的正负判断滚动的方向
    detail = e0.wheelDelta,
    isScrollDown = detail < 0 ? true : false;
    var height = 0;
    var winH = $(window).height();
    var fixed = true;
    // viewIndex的取值范围是0-4
    if(isScrollDown) {
      fixed = true;
      viewIndex < 4 ? ++ viewIndex : '';
      // 向下滚动时需要增加fade-in这个class，触发过渡效果
      $('.' + viewName[viewIndex]).find('.fade').addClass('fade-in');
      // todo 把fade-in的增删抽象出来，有几个地方反复用到了
    } else {
      viewIndex > 0 ? -- viewIndex : '';
      if (viewIndex > 0) {
        fixed = true;
      }else {
        fixed = false;
      }
    }
    height = winH * viewIndex;
    viewScroll('html', height, fixed);
  })

})
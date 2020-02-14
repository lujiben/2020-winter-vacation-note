## 第一天
#### CDN
  > CDN:Content Delivery Network,内容分发网络。

## 第二天
#### 媒体查询
``` css 
@media (min-width: 768px) and (max-width: 1200px) {
  .row {
    color: white;
  }
}
```

#### 栅格系统（grid）
``` html
  <div class="container">
    <div class="row">
      <div class="red col-md-3 col-md-offset-3">8</div>
      <div class="blue col-md-6">4</div>
    </div>
  </div>
```

#### 按钮
``` html 
  <button type="button" class="btn btn-info">提交</button>
  具体的按钮颜色可以通过class改变，例如：btn-info、btn-danger、btn-default等；按钮的大小也可以通过class改变，例如：btn-sm、btn-lg
```

#### 模态框
``` html
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
    Launch demo modal
  </button>
  <!-- 这里通过myModal这个id，把按钮与模态框联系起来。这个值要和下面的模态框的id对应 -->

  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">大二前端的模态框</h4>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
```
#### 图片居中（以水平居中为例）
  - 1.设置position: relative以及margin-left: 50%，这个左边距是父容器宽度的一半，此时图片不再紧贴父容器的左侧，而是再中间。然后设置left，值为自己宽度的一半，并取负值，此时图片向左移动自己宽度的一半。代码如下
  ``` css
  .back-home a.home-a {
    width: 100px;
    height: 100px;
    position: relative;
    /* 注意，这个元素的宽度是100px */
    left: -50px;
    margin-left: 50%;
  }
  ```
## 第三天
#### vscode快捷键
  - ctrl+P 打开文件
  - ctrl+F 局部搜索，在当前文件搜索
  - ctrl+shift+F 全局搜索，在所有文件搜索
  - ctrl+G 跳转到指定行
  - ctrl+B 打开侧边栏/
  
#### 使用谷歌浏览器查看伪类
 - 1.检查元素，并选中该元素
 - 2.element-styles-:hov（toggle element state，切换元素状态）
 - 3.勾选对应状态，例如hover，即可查看对应状态下的代码

 #### JQ
  - 1.固定格式
  ``` js
  $(document).ready(function() {
    // 你的代码
  })
  // 等价于下面的写法：
  $(function () {
    // 你的代码
  })
  // 这是第一种写法的简写形式，表示在文档（document）加载完成（ready）后，再加载并执行
  ```
  - 2.jq中的选择器
   > jq的核心是css选择器！

  格式：$('.class'),$('#id'),$('div')等，注意，如果选择器是变量，就不能带上引号，例如:
  ``` js
  var el = '.element';
  $(el).show();
  ```
  - 3.jq中的事件处理

  格式：$(选择器).事件名称(处理方式)，例如：
  $(el).click(function() {
    alert('我被点击了')
  })

## 第四天
#### JQ相关
  - 获取当前元素:$(this)
  - 获取元素的自定义属性的值：$(el).attr(属性名称)，例子：
  ``` html:
  <p class="p1" today="20200213">2020年2月13日</p>
  ```
  JS: $('.p1').attr('today')

  ## 第五天
  #### JQ相关
  > jq中提供了对指定元素增加、删除、切换class的方法，例如：$(el).addClass(className)/$(el).removeClass(className)/$(el).toggleClass(className),其中toggle意为切换。
  #### 过渡效果transition
  > 过渡效果需要出发，动画不需要触发就会自己执行，这是他们的一个区别。触发过渡效果最常见的是hover，这个项目中展示了另一种思路：增加class
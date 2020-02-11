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
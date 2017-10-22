### 使用Bootstrap制作试卷
#### 任务要求

- 使用Bootstrap栅格系统完成页面布局
- 使用合适的Bootstrap文本类型显示题目说明
- 使用Bootstrap的输入组件实现试卷答题功能

#### 完成内容说明

- Bootstrap所有文件引入方式为[BootCDN](http://www.bootcdn.cn/bootstrap/)
- 关于栅格系统：
  - 用了一个全局的row布局页面，即一行多列
  - 用`class="col-md-12"`来控制列的换行。
- 所有的输入组件都放在form中的，为一个整体。
- `√`和`×`用的是字体图标
- `class="form-control-static"`属性用来控制单行样式，而class="form-inline"是让文本和输入组件在一行上。
- 输入组件的题目说明用了`p`标签而没有使用`label`，是因为`label`的显示效果是粗体的。
# weChat-picker
微信小程序下弹选择器


## 组件的引入方式
  [官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
  
## 引入
```txt
  将/pages/component/picker按组件引入既可以
```

## 使用
``` wxml
  <picker
    bind:sure="_sure" 
    bind:close="_close" 
    pickData="{{listData}}" 
    open="{{openPicker}}"
    sureStyle=""
    cancelStyle=""
  />
```



## 使用
#### Props
| 名称             | 类型            | 是否必须             | 说明                                         |
| ----------------| ---------------- | ---------------| ------------------------------------------|
| sure            | Function         |   是           |  点击确定返回的时间   |
| close           | Function          | 是            | 点击取消返回的事件    |
| pickData        | Object            | 是            | 数据对象, 参考使用    |
| open            | Boolean           | 是             | 控制开启或关闭picker |
| sureStyle-cancelStyle | String      | 否             | 按钮样式             |

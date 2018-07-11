# weChat-picker
微信小程序下弹选择器


## 组件的引入方式
  [官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
  
## 引入
```txt
  将/pages/component/picker按组件引入既可以
```

## 使用
```
  <picker
    bind:sure="_sure" 
    bind:close="_close" 
    pickData="{{listData}}" 
    open="{{openPicker}}"
    sureStyle=""
    cancelStyle=""
  />
```



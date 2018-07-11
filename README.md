# weChat-picker
微信小程序下弹选择器


## 组件的引入方式
  [官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

## 效果
  ![image](https://github.com/loo41/weChat-picker/blob/master/doc/picker.gif)
  
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
``` js
  data: {
    openPicker: false,
    listData: {
      years: ['2018年', '2017年', '2016年', '2015年'],
      months: ['12月', '11月', '10月', '9月', '8月', '7月', '6月'],
      days: ['1天', '2天', '3天', '4天', '5天', '6天', '7天', '8天']
    },
  }
  _sure (e) {
    let data = e.detail
    console.log(e.detail)
    if (JSON.stringify(e.detail) === '[]') {
      this.setData({openPicker: false})
      return
    }
    let {value} = this.data
    value = data.join('')
    this.setData({
      openPicker: false,
      value
    })
    console.log('点击了确定')
  },
  _close (e) {
    console.log(e.detail)
    this.setData({openPicker: false})
    console.log('点击了取消')
  },
  _openPick () {
    this.setData({openPicker: true})
  }
```


## 使用
#### Props
| 名称             | 类型            | 是否必须             | 说明                                         |
| ----------------| ---------------- | ---------------| ------------------------------------------|
| sure            | Function         |   是           |  点击确定返回的事件   |
| close           | Function          | 是            | 点击取消返回的事件    |
| pickData        | Object            | 是            | 数据对象, 参考使用    |
| open            | Boolean           | 是             | 控制开启或关闭picker |
| sureStyle-cancelStyle | String      | 否             | 按钮样式             |

## 其他
1: pickData对象可以任意定制，只要和是对象-数组既可
2: open参数记得每次回调完，一定设置为false，不然下次就打不开

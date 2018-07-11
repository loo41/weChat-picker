//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listData: {},
    openPicker: false,
    listData: {
      years: ['2018年', '2017年', '2016年', '2015年'],
      months: ['12月', '11月', '10月', '9月', '8月', '7月', '6月'],
      days: ['1天', '2天', '3天', '4天', '5天', '6天', '7天', '8天']
    },
    value: ''
  },
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
  defaultTap () {
    this.setData({openPicker: true})
  }
})

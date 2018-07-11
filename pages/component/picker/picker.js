const app = getApp()

Component({
  properties: {
    pickData: {
      type: Object,
      value: {},
      observer: function(newVal) {
        if (typeof newVal === 'object') {
          this.setData({listData: Object.values(newVal)})
        }
      }
    },
    sureStyle: {
      type: String,
      value: ''
    },
    cancelStyle: {
      type: String,
      value: ''
    },
    open: {
      type: Boolean,
      value: false,
      observer: function(newVal) {
        if (String(newVal) === 'true') {
          this.setData({isOpen: true})
          this._openClosePicker()
        }
      }
    },
    maskStyle: {
      type: String,
      value: ''
    },
    indicatorStyle: {
      type: String,
      value: ''
    },
  },
  data: {
    isOpen: false,
    pickerBoxAnimation: {},
    pickerAnimation: {},
    pickeDate: [],
    listData: [],
    value: [],
    info: {
      H: '',
      W: ''
    }
  },
  attached () {
    this._getScreen()
  },
  methods: {
    _getScreen () {
      let that = this
      wx.getSystemInfo({
        success: function(res) {
          let H = res.windowHeight
          let W = res.windowWidth
          const {info} = that.data
          info.H = H
          info.W = W
          that.setData({info})
        }
      })
    },
    _closePicker () {
      let {pickeDate} = this.data
      this.triggerEvent('close', pickeDate)
      this.setData({isOpen: false})
      this._openClosePicker(1)
    },
    _bindChange (e) {
      const val = e.detail.value
      let {pickeDate} = this.data
      Object.values(this.data.pickData).forEach((item, i) => {
        pickeDate[i] = item[val[i]]
      })
      this.setData({pickeDate, value: val})
    },
    _surePicker () {
      let {pickeDate} = this.data
      this.triggerEvent('sure', pickeDate)
      this.setData({isOpen: false})
      this._openClosePicker(1)
    },
    _openClosePicker (flag) {
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      let animationBox = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      if (flag === 1) {
        animation.bottom('-100%').step()
        animationBox.bottom('-100%').step()
      } else {
        animation.bottom(0).step()
        animationBox.bottom(0).step()
      }
      this.setData({
        pickerBoxAnimation: animation.export(),
        pickerAnimation: animationBox.export()
      })
    }
  }
})
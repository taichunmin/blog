'use strict'

const moment = require('moment')

require('moment/locale/zh-tw')
moment.locale('zh-tw')

// https://momentjs.com/docs/#/customization/relative-time-threshold/
moment.relativeTimeThreshold('s', 60)
moment.relativeTimeThreshold('m', 60)
moment.relativeTimeThreshold('h', 24)
moment.relativeTimeThreshold('ss', -1)
moment.updateLocale('zh-tw', {
  relativeTime: {
    ss: '%d 秒'
  }
})

module.exports = moment

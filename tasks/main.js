var async = require('async')
var read = require('./read')
var write = require('./write')
var logger = require('debug')('crawl:main')

logger('开始执行任务！')
//串行 waterfall
async.waterfall([
    function (callback) {
        read('http://top.baidu.com/buzz?b=26&c=1', callback)
    },
    function (movies, callback) {
        write(movies, callback)
    }
], function (err, result) {
    logger('全部任务执行完毕!')
})



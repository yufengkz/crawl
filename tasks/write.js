/*
* 把得到的电影数组存入数据库中*/
var Movie = require('../model')
let async = require('async')
let debug = require('debug')
let logger = debug('crawl:write')
module.exports = function (movies, callback) {  //谁调用谁谁传入callback
    async.forEach(movies, function (movie, cb) {  //
        Movie.create(movie, cb)  //creat存完以后的函数
        logger(`写入电影：${logger.name}`)
    }, callback)
}

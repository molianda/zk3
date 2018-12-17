/*
 * @Author: 田佳茹 
 * @Date: 2018-12-17 09:26:00 
 * @Last Modified by: 田佳茹
 * @Last Modified time: 2018-12-17 10:06:31
 */

var express = require('express');
var router = express.Router();
var train = require('../json/data.json');
/* GET users listing. */
//获取日期
router.get('/api/get/train_tickets', function(req, res, next) {
    var today = req.today;
    if (!today) {
        res.json({ code: 0, msg: '缺少参数' });
    } else {
        res.json({ code: 1, msg: '获取时间', data: today });
    }
});
//获取火车票列表 
router.post('/api/trains', function(req, res, next) {
    res.json({ code: 1, msg: '查询成功', data: train });
});

module.exports = router;
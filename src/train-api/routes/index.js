var express = require('express');
var router = express.Router();

/* GET home page. */
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
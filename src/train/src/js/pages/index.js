/*
 * @Author: 田佳茹 
 * @Date: 2018-12-17 09:55:43 
 * @Last Modified by: 田佳茹
 * @Last Modified time: 2018-12-17 10:11:36
 */

require(['./js/config.js'], function() {
    require(['jquery', 'dom'], function($, dom) {
        dom('button').addEventListener('click', function() {
            var today = dom('.times b').innerHTML;
            $.ajax({
                url: '/api/get/train_tickets',
                success: function() {
                    location.href = "../../page/detail.html";
                }
            });
        })
    });
})
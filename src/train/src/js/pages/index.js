/*
 * @Author: 田佳茹 
 * @Date: 2018-12-17 09:55:43 
 * @Last Modified by: 田佳茹
 * @Last Modified time: 2018-12-17 10:24:19
 */

require(['./js/config.js'], function() {
    require(['dom'], function(dom) {
        dom('button').addEventListener('click', function() {
            var today = dom('.times b').innerHTML;
            location.href = "../../page/detail.html?" + today;
        })
    });
})
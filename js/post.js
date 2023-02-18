const { page } = require("hexo/lib/plugins/helper/is");

function setHitokoto() {
    $.get('https://v1.hitokoto.cn/', function (data) {
        if (typeof data === 'string')
            data = JSON.parse(data);
        $('#hitokoto-loader').removeClass('active');
        $('#hitokoto-content').css('display', '').text(data.hitokoto);
        if (data.from) {
            if (data.from_who)
                $('#hitokoto-from').css('display', '').text('来自「' + data.from + '」：' + data.from_who);
           else
                $('#hitokoto-from').css('display', '').text('来自「' + data.from + '」');
        }
    });
}
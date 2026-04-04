const { page } = require("hexo/lib/plugins/helper/is");

// 一言
function setHitokoto() {
    $.get('https://v1.hitokoto.cn/?c=i', function (data) {
        if (typeof data === 'string')
            data = JSON.parse(data);
        $('#hitokoto-loader').removeClass('active');
        $('#hitokoto-content').css('display', '').text(data.hitokoto);
        if (data.from)
            $('#hitokoto-from').css('display', '').text('来自「' + data.from + '」');
    });
}

// 随机英语小作文
// <p><a id="rainbow" href=''>🌈 获取中...</a></p>
function setRainbow() {
    fetch('https://api.eatrice.top')
    .then(response => response.json())
    .then(data => {
        var rainbow = document.getElementById('rainbow');
        rainbow.innerHTML = data.Content;
        rainbow.href = "https://rainbow.eatrice.top/?ID=" + data.ID;
    })
    .catch(console.error);
}
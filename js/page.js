function setHitokoto() {
    $.get('https://v1.hitokoto.cn/', function (data) {
        if (typeof data === 'string')
            data = JSON.parse(data);
        $('#hitokoto-loader').removeClass('active');
        $('#hitokoto-content').css('display', '').text(data.hitokoto);
        if (data.from)
            $('#hitokoto-from').css('display', '').text('来自' + data.from_who + '：「' + data.from + '」');
    });
}
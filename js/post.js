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

function setOrder() {
    var revPosts = site.posts.data;
    revPosts.sort(function (a, b) { return b.date - a.date; });
    return revPosts;
}

function getPrevPost() {
    var result = setOrder();
    var last = 0;
    result.forEach(function (post) {
        if (post.source == page.source)
            return last;
        last = post;
    });
    return 0;
}

function getNextPost() {
    var result = setOrder();
    var flag = false;
    result.forEach(function (post) {
        if (post.source == page.source)
            flag = true;
        if (flag == true)
            return post;
    });
    return 0;
}
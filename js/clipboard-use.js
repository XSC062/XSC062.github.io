/*页面载入完成后，创建复制按钮*/
!function (e, t, a) {
    var initCopyCode = function() {
        var copyHtml = '';
        copyHtml += '<button type="button" class="btn-copy" data-clipboard-snippet="">';
        copyHtml += '<i class="far fa-clone"></i><span>Copy</span>';
        copyHtml += '</button>';
        $("pre.line-numbers, .line-numbers pre").wrap($('<div class="code-wrap"></div>'));
        $('.code-wrap').prepend(copyHtml);
        var clipboard = new ClipboardJS('.btn-copy', {
            target: function(trigger) {
                return trigger.nextElementSibling;
            }
        });
        // 成功提示
        clipboard.on('success', function(e) {
            e.trigger.style = "opacity: 1;";
            e.trigger.getElementsByTagName('i')[0].style = "display: none;";
            e.trigger.getElementsByTagName('span')[0].innerHTML = "Copied!"
            e.trigger.getElementsByTagName('span')[0].style = "margin-left: 0;"
            e.clearSelection();
            var displayKeeper = setInterval(() => {
                e.trigger.style = "opacity: 1;";
            }, 10);
            setTimeout(() => {
                e.trigger.getElementsByTagName('i')[0].style = null;
                e.trigger.getElementsByTagName('span')[0].style = null
                e.trigger.getElementsByTagName('span')[0].innerHTML = "Copy"
                e.trigger.style = null;
            }, 700);
            setTimeout(() => {
                clearInterval(displayKeeper);
                e.trigger.style = null;
            }, 1000);
        });
        clipboard.on('error', function(e) {
            e.trigger.getElementsByTagName('i')[0].style = "display: none;";
            e.trigger.getElementsByTagName('span')[0].innerHTML = "Something\'s wrong. Maybe try again?"
            e.trigger.getElementsByTagName('span')[0].style = "margin-left: 0;"
            e.clearSelection();
            var displayKeeper = setInterval(() => {
                e.trigger.style = "opacity: 1;";
            }, 10);
            setTimeout(() => {
                e.trigger.getElementsByTagName('i')[0].style = null;
                e.trigger.getElementsByTagName('span')[0].style = null
                e.trigger.getElementsByTagName('span')[0].innerHTML = "Copy"
                e.trigger.style = null;
            }, 700);
            setTimeout(() => {
                clearInterval(displayKeeper);
                e.trigger.style = null;
            }, 1000);
        });
    }
    initCopyCode();
}(window, document);
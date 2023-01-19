// 获取相对路径
function GetUrlRelativePath() {
    // 获取绝对路径
    var url = document.location.toString();
    // 将绝对路径分割为 协议 和 其他内容 两部分
    var arrUrl = url.split("//");
    // 获取第一个 / 的位置
    var start = arrUrl[1].indexOf("/");
    // 截取第一个 / 以后的部分
    var relUrl = arrUrl[1].substring(start);
    // 去除路径参数（虽然没有）
    if (relUrl.indexOf("?") != -1) {
        relUrl = relUrl.split("?")[0];
    }
    // 返回相对路径
    return relUrl;
}
// 获取导航分类
function GetCategoriyPart() {
    var resURL = GetUrlRelativePath();
    if (resURL.indexOf("/") != -1) {
        resURL = resURL.split("/")[1];
    }
    if (resURL == "") {
        return "Home";
    }
    if (resURL == "categories") {
        return "Cate";
    }
    if (resURL == "tags") {
        return "Tags";
    }
    if (resURL == "friends") {
        return "Frie";
    }
    if (resURL == "about") {
        return "Abou";
    }
    if (resURL == "intrests" || resURL == "imgs"
        || resURL == "videos" || resURL == "musics") {
        return "Inte";
    }
    if ('0' <= resURL[0] <= '9' || resURL == "archives") {
        return "Arch";
    }
    return "-1";
}
// 将页面对应导航词条置为活动
function SetActiveItem() {
    var resId = GetCategoriyPart();
    if (resId != "-1") {
        document.getElementById(resId).style 
            = "border-bottom: rgb(238, 122, 76) solid 4px;";
    }
}
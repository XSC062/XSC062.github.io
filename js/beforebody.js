/*
啊？这玩意儿是我写的？我居然还会写 js？
🤔😲😇
*/
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
	if ('0' <= resURL[0] <= '9' || resURL == "archive") {
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
// Details 优化 1：鼠标悬浮优化
//	这里因为理论上来说鼠标悬浮在 <summary> 上时才应该有
//	cursor: pointer，但是大部分 details 都没有 summary
//	故自动添加
function setDetailsSummary() {
	var de = document.getElementsByTagName("details");
	for (i = 0; i < de.length; ++i) {
		var su = de[i].getElementsByTagName("summary");
		if (su.length == 0) {
			const nsu = document.createElement("summary");
			const nsutext = document.createTextNode("查看代码");
			nsu.appendChild(nsutext);
			de[i].appendChild(nsu);
		}
	}
}
// Details 优化 2：下滑式动画
// 实时监视 details 的打开状态，用到了 MutationObserver
// function detailsAnimation() {
// 	var de = document.getElementsByTagName("details");
// }
// function $(Nid) {
//     return document.getElementById(Nid);
// }

function surprise() {
	;
}
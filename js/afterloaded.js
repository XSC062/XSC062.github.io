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
	$("summary>p").parent().text(function(r, o) {
		return $(this).children("p").text();
	})
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

// 标题优化：hover 时显示锚
function setTitleAnchor() {
	var h = document.getElementsByTagName("h2");
	for (i = 0; i < h.length; ++i) {
		var anchor = document.createElement("a");
		var inner = document.createElement("a");
		inner.innerText = h[i].innerText;
		h[i].innerText = '';
		anchor.innerText = "#";
		anchor.id = "anchor";
		inner.href = anchor.href = '#' + h[i].id;
		inner.id="inner";
		h[i].insertBefore(anchor, h[i].firstChild);
		h[i].appendChild(inner);
	}
	h = document.getElementsByTagName("h3");
	for (i = 0; i < h.length; ++i)
		if (h[i].id != "hitokoto-title") {
			var anchor = document.createElement("a");
			var inner = document.createElement("a");
			inner.innerText = h[i].innerText;
			h[i].innerText = '';
			anchor.innerText = "#";
			anchor.id = "anchor";
			inner.href = anchor.href = '#' + h[i].id;
			inner.id="inner";
			h[i].insertBefore(anchor, h[i].firstChild);
			h[i].appendChild(inner);
		}
	return;
}

// 目录优化：空目录提示
function setEmptyToc() {
	var toc = document.getElementById("toc");
	if (toc && toc.lastElementChild.id == "toctitle") {
		var tip = document.createElement("div");
		tip.id = "tip";
		tip.innerHTML = "<a href=\"https://github.com/DavidAnson/markdownlint/blob/main/doc/md041.md\" style=\"text-decoration: underline;\">MD041</a> 建议，Markdown 文件的首行应为一级标题。显然地，这篇文章并没能做到这一点。";
		toc.appendChild(tip);
	}
	return;
}

// 设置代码高亮类名
function setCodeClassName() {
	var pre = document.getElementsByTagName("pre");
	for (var i = 0; i < pre.length; ++i) {
		var code = pre[i].getElementsByTagName("code");
		for (var j in code)
			code[j].className = "language-" + pre[i].className;
	}
	return;
}
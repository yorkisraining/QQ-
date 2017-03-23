function moveElement() {
	var header = document.getElementById("login_logo");
	header.onmousedown = fnDown;
	//关闭
	var closeIcon = getByClass("close","btn_close")[0];
	closeIcon.onclick = function() {
		var bodyDiv = document.getElementById("loadbody");		
		bodyDiv.style.display = "none"; 
	}
	//下拉列表
	var stateIcon = document.getElementById("loginstate_icon"),
			stateText = document.getElementById("loginstate_text"),
			ul = document.getElementById("loginstatePanal"),
			lis = ul.getElementsByTagName("li");
			
	stateText.onclick = function(e) {
		e = e || window.event;
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
		ul.style.display = "block";
	}
	
	for (var i=0; i<lis.length; i++) {
		lis[i].onmouseover = function() {
			this.style.background = "#567";
		}
		lis[i].onmouseout = function() {
			this.style.background = "#fff";
		}
		lis[i].onclick = function(e) {
			e = e || window.event;
			if (e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}
			ul.style.display = "none";
			var id = this.id;
			stateText.innerHTML = getByClass("stateSelect_text", id)[0].innerHTML;
			stateIcon.className = "";
			stateIcon.className = "loginstate_icon "+id;
		}
	}
	document.onclick = function() {
		ul.style.display = "none"
	}
}


function fnDown(event) {
	event = event || window.event;
	var bodyDiv = document.getElementById("loadbody");
	// 光标按下时，光标和面板之间的距离
	disX = event.clientX - bodyDiv.offsetLeft;
	disY = event.clientY - bodyDiv.offsetTop;
	//移动
	document.onmousemove = function(event) {
		event = event || window.event;
		fnMove(event, disX, disY);
	}
	//释放鼠标
	document.onmouseup = function() {
		document.onmousemove = null;
	}
}

function fnMove(e, posX, posY) {
	var bodyDiv = document.getElementById("loadbody"),
			l = e.clientX - posX,
			t = e.clientY - posY,
			winX = document.documentElement.clientWidth || document.body.clientWidth,
			winY= document.documentElement.clientHeight || document.body.clientHeight,
			maxW = winX - bodyDiv.offsetWidth,
			maxH = winY -bodyDiv.offsetHeight;
	if (l < 0) {
		l = 0;
	} else if(l > maxW) {
		l = maxW;
	}
	if (t < 0) {
		t = 0;
	} else if (t > maxH) {
		t = maxH;
	}
	bodyDiv.style.left = l + "px";
	bodyDiv.style.top = t + "px";
}

function changeT() {
	var inputText = document.getElementById("account_number");
	inputText.onfocus = function() {
		if (this.value == this.defaultValue) {
			this.value = "";
		}
	}
	inputText.onblur = function() {
		if (this.value == "") {
			this.value = this.defaultValue;
		}
	}
}

addLoadEvent(moveElement);
addLoadEvent(changeT);
function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}


var url = window.location.hash;
var arr = url.split("=");
var pre_token = arr[1];
var arr_token = pre_token.split("&");
var token = arr_token[0];
var id = arr[3];
var name;
var lastname;

var script = document.createElement('SCRIPT'); 
script.src = "https://api.vk.com/method/users.get?user_ids=" + id + "&fields=bdate&v=5.53&callback=callbackFunc"; 
document.getElementsByTagName("head")[0].appendChild(script); 
function callbackFunc(result) {
  name     = result.response[0].first_name;
  lastname = result.response[0].last_name;
}

setCookie("name", name);
setCookie("lastname", lastname);

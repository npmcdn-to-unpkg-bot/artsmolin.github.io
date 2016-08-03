alert( document.cookie );

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
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

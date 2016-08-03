
var url = window.location.hash;
var arr = url.split("=");
var pre_token = arr[1];
var arr_token = pre_token.split("&");
var token = arr_token[0];
var id = arr[3];
var name;
var name_ok = 0;

var script = document.createElement('SCRIPT'); 
script.src = "https://api.vk.com/method/users.get?user_ids=" + id + "&fields=bdate&v=5.53&callback=callbackFunc"; 
document.getElementsByTagName("head")[0].appendChild(script); 
function callbackFunc(result) {
  name = result.response[0].first_name;
  name_ok = 1;
}

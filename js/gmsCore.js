import {gmsCoreUrl} from "./variable.js";


export  function fetchGms() {
fetch(gmsCoreUrl, {
}).then(res => {return res.json()})
.then(data => {
var gmsLink = data[0].assets[0].browser_download_url;
$('#gmsCore').attr('href', gmsLink);
}).catch(e => {console.log(e)})
}
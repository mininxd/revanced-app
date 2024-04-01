import {vancedUrl} from "./variable.js";


export function fetchVanced() {
 fetch(vancedUrl, {
}).then(res => {return res.json()})
.then(data => {
// console.log(data);
 var lastUpdate = data[0].published_at;
 var updateDate = new Date(lastUpdate);
 $("#lastUpdateEl").html("Last update: "+ updateDate.toString());
 
 

 var ytName = data[0].assets[8].name;
 var ytMagisk = data[0].assets[8].browser_download_url;
 var ytLink = data[0].assets[9].browser_download_url;
 var ytVersion = ytName.slice(24,33);
 
 
 var musicName = data[0].assets[0].name;
 var musicMagisk7 = data[0].assets[0].browser_download_url;
 var musicMagisk8 = data[0].assets[1].browser_download_url;
 var musicArm7 = data[0].assets[2].browser_download_url;
 var musicArm8 = data[0].assets[3].browser_download_url;
 var musicVersion = musicName.slice(22,30);
 
  
  
$(".ytVersionEl").html(ytVersion);
$(".musicVersionEl").html(musicVersion);

$('#ytLink').attr('href', ytLink);
$('#ytMagisk').attr('href', ytMagisk);

$('#musicA7').attr('href', musicArm7);
$('#musicA8').attr('href', musicArm8);
$('#musicMagisk7').attr('href', musicMagisk7);
$('#musicMagisk8').attr('href', musicMagisk8);



//hide loading
$('.loadingContainer').addClass("is-hidden");

  
}).catch(e => {console.log(e); $('.loadingContainer').addClass("is-hidden");})
}
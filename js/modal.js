document.addEventListener('DOMContentLoaded', () => {
 
 
 $('#ytMusic').on('click', function() {
   setTimeout( function(){
  $('#ytMusicModal').addClass("is-active");
 }, 250)
 });
 
 $('#musicMagisk').on('click', function() {
   setTimeout( function(){
  $('#ytMagiskModal').addClass("is-active");
 }, 250)
 })


 //close all modal
 $('.modal-background').on('click', function() {
  $('.modal').removeClass("is-active");
}) 
})
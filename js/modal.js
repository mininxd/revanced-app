document.addEventListener('DOMContentLoaded', () => {
 
 
 $('#ytMusic').on('click', function() {
  $('#ytMusicModal').addClass("is-active");
 })
 
 $('#musicMagisk').on('click', function() {
  $('#ytMagiskModal').addClass("is-active");
 })


 //close all modal
 $('.modal-background').on('click', function() {
  $('.modal').removeClass("is-active");
}) 
})
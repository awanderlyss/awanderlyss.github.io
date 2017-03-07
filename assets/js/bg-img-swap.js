// check to see what tab is active when the header is clicked
$('header').on('click', function(){
  // get the id of the tab with the class is-active
  // http://stackoverflow.com/questions/37988484/how-to-get-id-from-class
  let currentTab = $('.is-active')[1].id;
  // if tab is not equal to home
  if(currentTab !== 'home'){
    // change the background image to white
    $('.mdl-layout').css('background', '#FAFAFA');
  }
  else {
    // home tab is clicked after init load, img will be set
    $('.mdl-layout').css('background', "url('./assets/images/bg-img2.jpg') center / cover");
  }

});

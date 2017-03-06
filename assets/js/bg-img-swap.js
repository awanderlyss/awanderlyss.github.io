// check to see what tab is active when the header is clicked
$('header').on('click', function(){
  // get the id of the tab with the class is-active
  // http://stackoverflow.com/questions/37988484/how-to-get-id-from-class
  let currentTab = $('.is-active')[1].id;
  console.log(currentTab);
  // if tab is not equal to home
  if(currentTab !== 'home'){
    console.log("currentTab is not home!!");
    // we need to change the background image to white
    $('.mdl-layout').css('background', 'white');
  }

});

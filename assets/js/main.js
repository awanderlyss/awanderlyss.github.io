document.addEventListener("DOMContentLoaded", function(event){
  var bodySize = document.body.getBoundingClientRect().width;
  console.log(typeof bodySize);
  function createWebsiteWindow(){
    bodySize     = document.body.getBoundingClientRect().width;
    console.log(bodySize)
    var display  = document.querySelector('#display').getBoundingClientRect()
        website  = document.querySelector('#website');
    if(bodySize > 900){
      website.style.top = display.top+'px';
      website.style.left = display.left+'px';
      website.style.right = display.right+'px';
      website.style.bottom = display.bottom+'px';
      website.style.width = display.width+'px';
      website.style.height = display.height+'px';
    }else{
      console.log("It's scaling!");
    }
  }
  if (bodySize > 900) {
    createWebsiteWindow()
  }
  window.addEventListener("resize", createWebsiteWindow)
});

document.addEventListener("DOMContentLoaded", function(event){
  var bodySize = document.body.getBoundingClientRect().width;
  function createWebsiteWindow(){
    bodySize     = document.body.getBoundingClientRect().width;
    var display  = document.querySelector('#compScreen').getBoundingClientRect()
        website  = document.querySelector('#website');
    if(bodySize > 900){
      website.style.top = display.top+'px';
      website.style.left = display.left+'px';
      website.style.right = display.right+'px';
      website.style.bottom = display.bottom+'px';
      website.style.width = display.width+'px';
      website.style.height = display.height+'px';
    }
  }
  if (bodySize > 900) {
    createWebsiteWindow()
  }
  window.addEventListener("resize", createWebsiteWindow)
});

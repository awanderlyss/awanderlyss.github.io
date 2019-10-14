document.addEventListener("DOMContentLoaded", function(event){
  var bodySize = document.body.getBoundingClientRect().width;
  function createWebsiteWindow(){
    bodySize    = document.body.getBoundingClientRect().width;
    var display = document.querySelector('#compScreen').getBoundingClientRect()
        website = document.querySelector('#website')
        portrait = document.querySelector('#portrait').getBoundingClientRect()
        photo   = document.querySelector('#photo')

    if(bodySize > 900){
      website.style.top = display.top+'px';
      website.style.left = display.left+'px';
      website.style.right = display.right+'px';
      website.style.bottom = display.bottom+'px';
      website.style.width = display.width+'px';
      website.style.height = display.height+'px';

      photo.style.top = portrait.top+'px';
      photo.style.left = portrait.left+'px';
      photo.style.right = portrait.right+'px';
      photo.style.bottom = portrait.bottom+'px';
      photo.style.width = portrait.width+'px';
      photo.style.height = portrait.height+'px';
    }
  }
  if (bodySize > 900) {
    createWebsiteWindow()
  }
  window.addEventListener("resize", createWebsiteWindow)
});

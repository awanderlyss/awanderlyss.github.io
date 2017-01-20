// Google Map Location
var myCenter = new google.maps.LatLng(41.878114, -87.629798);

function initialize() {
var mapProp = {
  center: myCenter,
  zoom: 12,
  scrollwheel: false,
  draggable: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position: myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

// Open and close sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "60%";
  document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}

function createToolbox() {
  let toolbox = $("#toolbox");
  let tools = $('<div class="tools"></div>');
  let toolboxTools = [{ title: "Languages", icons: ["devicon-css3-plain", "devicon-html5-plain", "devicon-javascript-plain", "devicon-ruby-plain"]},
  {title: "Frameworks && Libraries", icons: ["devicon-angularjs-plain", "devicon-jquery-plain", "devicon-rails-plain", "devicon-sass-original"]},
  {title: "Technologies", icons: ["devicon-atom-original", "devicon-git-plain", "devicon-github-plain",
  "devicon-heroku-original", "devicon-trello-plain", "fa fa-slack"]}];

  for(let tool in toolboxTools){
    toolbox.append(`<p class="w3-wide">${toolboxTools[tool].title}</p>`);
    toolbox.append('<div class="tools"></div>');
    for(let icon in toolboxTools[tool].icons){
      console.log(toolboxTools[tool].icons[icon]);
      $('.tools').eq(tool).append(`<i class="w3-xxxlarge ${toolboxTools[tool].icons[icon]}"></i>`);
    }

  }

}
createToolbox();

var starAnimations = [];

// http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-varter-of-a-string-uppercase-in-javascript
// function that capitalizes the first varter of a string
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// self-invoking func to create toolbox on about tab
(function createToolbox() {
  // get toolbox div
  var toolbox = $("#toolbox");

  // array of icons
  var icons = ["devicon-css3-plain", "devicon-html5-plain", "devicon-javascript-plain", "devicon-ruby-plain", "devicon-angularjs-plain", "devicon-jquery-plain", "devicon-rails-plain", "devicon-sass-original", "devicon-git-plain", "devicon-github-plain",
  "devicon-heroku-original"];

  // for each icon in icons
  for(var icon in icons){
    // create div to hold icon and title
    var tool = $('<div class="tool"></div>');
    // split icon name at "-"
    var splitIconNameArr = icons[icon].split('-');
    // set icon name equal to correct string
    var iconName = splitIconNameArr[1];
    // append icon & icon name in a tool div
    tool.append(`
      <i class="${icons[icon]} colored"></i>
      <p>${iconName.capitalize()}</p>
    `);
    // append tool to toolbox div
    toolbox.append(tool);
  }
})();

function setAttributes(shape,i,cx,cy,r,fill,filter){
  var className = "star-one";

  shape.setAttribute('class', className);
  shape.setAttribute("id","st"+i);
  shape.setAttribute("cx", cx);
  shape.setAttribute("cy", cy);
  shape.setAttribute('r', r);
  shape.setAttribute("fill", fill);
  shape.setAttribute("filter", filter);
  return shape;
}

(function createRandomStars(){
  var svg = document.getElementById('svg');
  var width = document.getElementById('lineDrawing').offsetWidth;
  var height = document.getElementById('lineDrawing').offsetHeight;
  for(var i = 1;i<=64;i++){
    var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var outterShape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var r = Math.floor(Math.random() * (3 - 1) + 1);
    var cx = Math.floor(Math.random() * (width - 1) + 1);
    var cy = Math.floor(Math.random() * (height - 1) + 1);
    shape = setAttributes(shape,i,cx,cy,r,"white","url(#glow)");

    svg.appendChild(shape);
  }
})();

(function animateStars(){
  var loc = [[331, 12, 2],[384, 49, 2],[378, 50, 2],[402, 113, 2],[360, 89, 2],[320, 59, 2],[312, 33, 2],[285, 37, 2],[270, 48, 2],[307, 105, 2],[346, 140, 2],[387, 185, 2],[321, 176, 2],[249, 126, 2],[216, 90, 2],[172, 109, 2],[224, 131, 2],[239, 177, 2],[268, 201, 2],[357, 210, 2],[348, 249, 2],[317, 284, 2],[293, 299, 2],[279, 288, 2],[251, 221, 2],[205, 173, 2],[268, 201, 2],[175, 139, 2],[130, 149, 2],[125, 182, 2],[175, 220, 2],[211, 239, 2],[251, 301, 2],[206, 283, 2],[183, 251, 5],[146, 252, 2],[120, 243, 2],[121, 277, 2],[146, 277, 2],[183, 283, 2],[192, 350, 2],[163, 320, 2],[111, 321, 2],[108, 326, 2],[186, 354, 2],[174, 354, 2],[168, 391, 2],[145, 430, 2],[154, 392, 2],[149, 363, 2],[104, 399, 2],[78, 357, 2],[56, 396, 2],[48, 351, 2],[21, 368, 2],[45, 331, 2],[11, 320, 2],[72, 302, 2],[51, 282, 2],[87, 271, 2],[64, 264, 2],[77, 245, 2],[53, 253, 2],[47, 229, 2]];
  for(var i = 0,length = loc.length;i<length;i++){
    var targetId = "#lineDrawing #st"+ (i+1);
    starAnimations[i] = anime({
      targets: targetId,
      cx: loc[i][0],
      cy: loc[i][1],
      r: loc[i][2],
      easing: 'easeInCirc',
      duration: 2000,
      delay: function(el, j) { return 4000 + (i * 75); }
    });
  }
})();

(function lineDrawing(){
  var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInSine',
  duration: 2300,
  delay: function(el, i) { return 5900 + i * 250 }
  // direction: 'alternate',
  // loop: true
});
})();

var properties = { opacity: '.25', fill: 'FFE67C' };

$('.star-one').pulse(properties, {
  delay: 100,
  duration : 3000,
  pulses   : 4,
  interval : 700
});
$('.star-two').pulse(properties, {
  delay: 500,
  duration : 3000,
  pulses   : 4,
  interval : 1200
});
$('.star-three').pulse(properties, {
  delay: 300,
  duration : 3000,
  pulses   : 4,
  interval : 1600
});
$('.star-four').pulse(properties, {
  delay: 700,
  duration : 3000,
  pulses   : 4,
  interval : 300
});

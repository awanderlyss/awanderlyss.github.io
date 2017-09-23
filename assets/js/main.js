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

// function setAttributes(shape,i,cx,cy,r,fill,filter){
//   var className = "star-one";
//
//   shape.setAttribute('class', className);
//   shape.setAttribute("id","st"+i);
//   shape.setAttribute("cx", cx);
//   shape.setAttribute("cy", cy);
//   shape.setAttribute('r', r);
//   shape.setAttribute("fill", fill);
//   shape.setAttribute("filter", filter);
//   return shape;
// }
//
// (function createRandomStars(){
//   var svg = document.getElementById('svg');
//   var width = document.getElementById('lineDrawing').offsetWidth;
//   var height = document.getElementById('lineDrawing').offsetHeight;
//   for(var i = 1;i<=64;i++){
//     var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     var outterShape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     var r = Math.floor(Math.random() * (3 - 1) + 1);
//     var cx = Math.floor(Math.random() * (width - 1) + 1);
//     var cy = Math.floor(Math.random() * (height - 1) + 1);
//     shape = setAttributes(shape,i,cx,cy,r,"white","url(#glow)");
//
//     svg.appendChild(shape);
//   }
// })();
//
// (function animateStars(){
//   var loc = [[331, 12, 2],[384, 49, 2],[378, 50, 2],[402, 113, 2],[360, 89, 2],[320, 59, 2],[312, 33, 2],[285, 37, 2],[270, 48, 2],[307, 105, 2],[346, 140, 2],[387, 185, 2],[321, 176, 2],[249, 126, 2],[216, 90, 2],[172, 109, 2],[224, 131, 2],[239, 177, 2],[268, 201, 2],[357, 210, 2],[348, 249, 2],[317, 284, 2],[293, 299, 2],[279, 288, 2],[251, 221, 2],[205, 173, 2],[268, 201, 2],[175, 139, 2],[130, 149, 2],[125, 182, 2],[175, 220, 2],[211, 239, 2],[251, 301, 2],[206, 283, 2],[183, 251, 5],[146, 252, 2],[120, 243, 2],[121, 277, 2],[146, 277, 2],[183, 283, 2],[192, 350, 2],[163, 320, 2],[111, 321, 2],[108, 326, 2],[186, 354, 2],[174, 354, 2],[168, 391, 2],[145, 430, 2],[154, 392, 2],[149, 363, 2],[104, 399, 2],[78, 357, 2],[56, 396, 2],[48, 351, 2],[21, 368, 2],[45, 331, 2],[11, 320, 2],[72, 302, 2],[51, 282, 2],[87, 271, 2],[64, 264, 2],[77, 245, 2],[53, 253, 2],[47, 229, 2]];
//   for(var i = 0,length = loc.length;i<length;i++){
//     var targetId = "#lineDrawing #st"+ (i+1);
//     starAnimations[i] = anime({
//       targets: targetId,
//       cx: loc[i][0],
//       cy: loc[i][1],
//       r: loc[i][2],
//       easing: 'easeInCirc',
//       duration: 2000,
//       delay: function(el, j) { return 4000 + (i * 75); }
//     });
//   }
// })();
//
// (function lineDrawing(){
//   var lineDrawing = anime({
//   targets: '#lineDrawing .lines path',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInSine',
//   duration: 2300,
//   delay: function(el, i) { return 5900 + i * 250 }
//   // direction: 'alternate',
//   // loop: true
// });
// })();
//
// var properties = { opacity: '.25', fill: 'FFE67C' };
//
// $('.star-one').pulse(properties, {
//   delay: 100,
//   duration : 3000,
//   pulses   : 4,
//   interval : 700
// });
// $('.star-two').pulse(properties, {
//   delay: 500,
//   duration : 3000,
//   pulses   : 4,
//   interval : 1200
// });
// $('.star-three').pulse(properties, {
//   delay: 300,
//   duration : 3000,
//   pulses   : 4,
//   interval : 1600
// });
// $('.star-four').pulse(properties, {
//   delay: 700,
//   duration : 3000,
//   pulses   : 4,
//   interval : 300
// });

var starAnimations = [];
function setAttributes(shape,i,cx,cy,r,fill,filter){
  shape.setAttribute("id","st"+i);
  shape.setAttribute("cx", cx);
  shape.setAttribute("cy", cy);
  shape.setAttribute('r', r);
  shape.setAttribute("fill", fill);
  shape.setAttribute("filter", filter);
  return shape;
}

function createRandomStars(){
  var svg = document.getElementById('svg');
  for(var i = 1;i<=64;i++){
    var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var outterShape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var r = Math.floor(Math.random() * (4 - 1) + 1);
    var cx = Math.floor(Math.random() * (800 - 1) + 1);
    var cy = Math.floor(Math.random() * (420 - 1) + 1);
    shape = setAttributes(shape,i,cx,cy,r,"white","url(#innerBlur)");
    outterShape = setAttributes(outterShape,i,cx,cy,r+2,"#FFFCB7","url(#blur)");
    svg.appendChild(outterShape);
    svg.appendChild(shape);
  }
}

createRandomStars();

function animateStars(){
  var loc=[[321,2,4],[374,39,4],[368,40,3],[392,103,4],[350,79,4],[310,49,4],[302,23,3],[275,27,3],[260,38,4],[297,95,4],[336,130,4],[377,175,4],[311,166,4],[239,116,4],[206,84,4],[162,99,4],[214,121,4],[229,167,4],[258,191,4],[347,200,4],[338,239,4],[307,274,4],[283,289,3],[269,278,4],[241,211,4],[195,163,4],[258,191,4],[165,129,4],[120,139,4],[115,172,4],[165,210,4],[201,229,4],[241,291,4],[196,273,4],[173,241,7],[136,242,4],[110,233,4],[111,267,4],[136,267,4],[173,273,4],[182,340,4],[153,310,4],[101,311,4],[98,316,4],[176,344,3],[164,344,4],[158,381,3],[135,420,3],[144,382,3],[139,353,4],[94,389,4],[68,347,4],[46,386,4],[38,341,4],[11,358,4],[35,321,4],[1,310,4],[62,292,4],[41,272,4],[77,261,4],[54,254,4],[67,235,4],[43,243,3],[37,219,3]]
  for(var i = 0,length = loc.length;i<length;i++){
    var targetId = "#lineDrawing #st"+ (i+1);
    starAnimations[i] = anime({
      targets: targetId,
      cx: loc[i][0],
      cy: loc[i][1],
      r: loc[i][2],
      easing: 'easeInExpo',
      duration: 2000,
      delay: function(el, j) { return 2000 + (i * 75); }
    });
  }
}

animateStars();

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInSine',
  duration: 2000,
  delay: function(el, i) { return i * 250; }
  // direction: 'alternate',
  // loop: true
});

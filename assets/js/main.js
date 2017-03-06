// http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
// function that capitalizes the first letter of a string
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function createToolbox() {
  // get toolbox div
  let toolbox = $("#toolbox");

  // array of icons
  let icons = ["devicon-css3-plain", "devicon-html5-plain", "devicon-javascript-plain", "devicon-ruby-plain", "devicon-angularjs-plain", "devicon-jquery-plain", "devicon-rails-plain", "devicon-sass-original", "devicon-git-plain", "devicon-github-plain",
  "devicon-heroku-original"];

  // for each icon in icons
  for(let icon in icons){
    console.log(icons[icon]);
    // create div to hold icon and title
    let tool = $('<div class="tool"></div>');
    // append icon & title in a tool div
    tool.append(`<i class="${icons[icon]}"></i>`);
    // append tool to toolbox div
    toolbox.append(tool);
  }


  // for(let tool in toolboxTools){
  //   toolbox.append(`<h6>${toolboxTools[tool].title}</h6>`);
  //   toolbox.append('<div class="tools"></div>');
  //   for(let icon in toolboxTools[tool].icons){
  //     let arrSplitIconName = toolboxTools[tool].icons[icon].split("-");
  //     let iconName = arrSplitIconName[1];
  //     console.log(iconName.capitalize());
  //     $('.tools').eq(tool).append(`
  //       <div class="tool">
  //         <i class="${toolboxTools[tool].icons[icon]} colored"></i>
  //         <p>${iconName.capitalize()}</p>
  //       </div>`);
  //
  //   }
  //
  // }

}
createToolbox();

$("tools").hover(function(){
  $(this).addClass(
    "colored"
  );
});

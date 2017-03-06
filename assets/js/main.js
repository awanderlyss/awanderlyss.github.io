// http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
// function that capitalizes the first letter of a string
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// self-invoking func to create toolbox on about tab
(function createToolbox() {
  // get toolbox div
  let toolbox = $("#toolbox");

  // array of icons
  let icons = ["devicon-css3-plain", "devicon-html5-plain", "devicon-javascript-plain", "devicon-ruby-plain", "devicon-angularjs-plain", "devicon-jquery-plain", "devicon-rails-plain", "devicon-sass-original", "devicon-git-plain", "devicon-github-plain",
  "devicon-heroku-original"];

  // for each icon in icons
  for(let icon in icons){
    // create div to hold icon and title
    let tool = $('<div class="tool"></div>');
    // split icon name at "-"
    let splitIconNameArr = icons[icon].split('-');
    // set icon name equal to correct string
    let iconName = splitIconNameArr[1];
    // append icon & icon name in a tool div
    tool.append(`
      <i class="${icons[icon]} colored"></i>
      <p>${iconName.capitalize()}</p>
    `);
    // append tool to toolbox div
    toolbox.append(tool);
  }
})();

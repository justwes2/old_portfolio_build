console.log("JS file is connected to HTML! Woo!")
// document.getElementsByClass('project').addEventListener('click', alert('Stay tuned to see me grow as a developer!'))

var project = document.getElementsByClassName("project");

var myFunction = function() {
    var attribute = this.getAttribute("data-myattribute");
    alert('Stay tuned to see me grow as a developer!');
};

for (var i = 0; i < project.length; i++) {
    project[i].addEventListener('click', myFunction, false);
}

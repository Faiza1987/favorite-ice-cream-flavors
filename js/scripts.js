$(document).ready(function() {
  $("#icecream").submit(function(event) {
    event.preventDefault();

    // create array for flavors (indicated in the HTML as an id)
    var iceCreamFlavors = ["flavor1", "flavor2", "flavor3"];

    // create empty array to hold flavors that will be pushed into array.
    var userInput = [];

    // create a forEach loop to loop over the flavors array
    iceCreamFlavors.forEach(function(iceCreamFlavor) {

      // create var to hold the userInput
      var flavor = $("input#" + iceCreamFlavor).val();

      // push the user input into the empty userInput array
      userInput.push(flavor);

      // show the output
      $("#output").append(flavor + " ");
    });
  });
});

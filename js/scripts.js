$(document).ready(function() {
  $("#icecream").submit(function(event) {
    event.preventDefault();

    // create array for flavors (indicated in the HTML as an id)
    var iceCreamFlavors = ["flavor1", "flavor2", "flavor3"];
    
    // create a forEach loop to loop over the flavors array
    iceCreamFlavors.forEach(function(iceCreamFlavor) {

      // create var to hold the userInput
      var flavor = $("input#" + iceCreamFlavor).val();

      // show the output
      $("#output").append(flavor + " ");
    });
  });
});

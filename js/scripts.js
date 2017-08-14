var favoriteDrink;
var favoriteColor;
var favoriteAnimal;

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    favoriteDrink = $("#drink").val();
    favoriteColor = $("#color").val();
    favoriteAnimal = $("#animal").val();
    var inputArray = [favoriteDrink, favoriteColor, favoriteAnimal];
    var newArray = [];
    newArray.push(inputArray[0], inputArray[1], inputArray[2]);
    $("#list1").append(newArray[0]);
    $("#list2").append(newArray[1]);
    $("#list3").append(newArray[2]);
  });
});

alert("hay!");
var win = 0;
var loose = 0;
var target = Math.floor(Math.random() * 200);
var score = 0;
var blue = 0;
var pink = 0;
var yellow = 0;
var purole = 0;
var randomNum = [];
var total = [];
$(document).ready(function() {
  $("#go").on("click", function() {
    // Math.random an array the fill it with 4 crystals and give them those random values.
    for (i = 0; i < 4; i++) {
      randomNum[i] = Math.floor(Math.random() * 150);
    }
    blue = randomNum[0];
    $("#blue").html(blue);
    pink = randomNum[1];
    yellow = randomNum[2];
    purple = randomNum[3];
    console.log(randomNum);
    console.log(blue);
    console.log(total);
    // assign crystals with random numbers add the clicks form crystal together.

    $(".crystal").on("click", function() {
      // considered using parseint to return values to intergers and add them together on each click
     $("#total").text(blue) 
    
    });
    // determine if the toatal and target values are the same for a win, incriment win, or over for a loss, incriment loss.
    function targetreach() {
      for (var i = 0; i < total.length; i++) {
        if (total[i] === target) {
          win++;
          alert(
            "You've do well young padowan! " +
              total +
              " and " +
              target +
              " are the same!"
          );
        } else if (total[i] > target) {
          loose++;
          alert(
            "You have gone to far this time." + total + " is more than" + target
          );
        }
      }
      return false;
    }
  });
});

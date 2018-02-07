alert("hay!");

var win = 0;
var loose = 0;
var target = Math.floor(Math.random() * 200);
var score = 0;
var blue = 0;
var pink =  0;
var yellow =  0;
var purole =  0;
var total = [];
$(document).ready(function() {
  $("#target").on("click", function() {

    // Math.random an array the fill it with 4 crystals and give them those random values.

    // add crystal clicks together

// determine if the toatal and target values are the same for a win, incriment win, or over for a loss, incriment loss.
    function targetreach() {
      for (var i = 0; i < total.length; i++) {
        if (total[i] === targey) {
          alert("You've do well young padowan! "+ total+ " and " +target+" are the same!");
        }
        win++
        else if(total[i]>target){
          alert("You have gone to far this time."+total+" is more than" + target);
        }
        loose++
      }
      return false;
    }
    
    
    });
  });
});

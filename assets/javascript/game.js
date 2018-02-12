var win = 0;
var lose = 0;
var target = 0;
var score = 0;

var crystal;
var crystals = [];

var pink;
var purple;
var blue;
var yellow;

$(document).ready(function() {
  function play() {
    reset();
    target = Math.floor(Math.random() * 100 )+ 25;
    target = parseInt(target);
    console.log(target);
    $("#hit").text(target);
    $("#total").text(score);
    for (var i = 0; i < 4; i++) {
      crystal = [Math.floor(Math.random() * 10 )+ 1];
      console.log("crystal" + crystal);
      crystals.push(crystal);
      console.log("crystals" + crystals);
    }
  }

  $("#blue").on("click", function() {
    blue = parseInt(crystals[0]);
    score += blue;
    console.log("blue" + blue);
    console.log("score" + score);
    $("#total").text(score);
    tracker();
  });

  $("#pink").on("click", function() {
    pink = parseInt(crystals[1]);
    score += pink;
    console.log("pink" + pink);
    console.log("score" + score);
    $("#total").text(score);
    tracker();
  });
  $("#yellow").on("click", function() {
    yellow = parseInt(crystals[2]);
    score += yellow;
    console.log("yellow" + yellow);
    console.log("score" + score);
    $("#total").text(score);
    tracker();
  });
  $("#purple").on("click", function() {
    purple = parseInt(crystals[3]);
    score += purple;
    console.log("purple" + purple);
    console.log("score" + score);
    $("#total").text(score);
    tracker();
  });
function reset(){
  score=0;
  crystal = 0;
  crystals =[];
}
  function tracker() {
    if (score === target) {
      alert("Win");
      win++;
      $("#win").html(win);
      // $("#score").text(score+" winner")
      play()
    } else if (score > target) {
      // alert("Lose");
      lose++;
      $("#loss").text(lose);
      // $("#score").text(score+" looser");
      play()
    }
  }
  play();
});

// old code
// $(document).ready(function() {
//   $("#go").on("click", function() {
//     // Math.random an array the fill it with 4 crystals and give them those random values.
//     for (i = 0; i < crystals.length; i++) {
//       randomNum = Math.floor(Math.random() * 150);
//       $("#"+crystals[i]).html(randomNum);

//     }

//     // blue = randomNum[0];
//     // pink = randomNum[1];
//     // yellow = randomNum[2];
//     // purple = randomNum[3];
//     console.log(randomNum[i]);
//     console.log(crystals[i]);
//     console.log(total);
//     console.log(purple)
//     // assign crystals with random numbers add the clicks form crystal together.

//     $(".crystal").on("click", function() {
//       // considered using parseint to return values to intergers and add them together on each click
//       $("#total").html(randomNum, [i]);

//       function targetreach() {
//         for (var i = 0; i < total.length; i++) {
//           if (total[i] === target) {
//             win++;
//             alert(
//               "You've done well! " + total + " and " + target + " are the same!"
//             );
//           } else if (total[i] > target) {
//             loose++;
//             alert(
//               "You have gone to far this time." + total + " is more than" + target+"."
//             );
//           }
//         }
//         return false;
//       }
//     });
//     // determine if the toatal and target values are the same for a win, incriment win, or over for a loss, incriment loss.

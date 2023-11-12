

// ============================ game timer -========================
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = 0;
      }
    }, 1000);
  }

//   window.onload = function () {
//         const twoMinutes = 120,
//         display = document.getElementById("countdown_timer");
//         console.log(display);
//         startTimer(twoMinutes, display);
//   };
  








// ================== dragable logic ===============



const list1 = document.getElementById('drop_zone1');
console.log(list1);
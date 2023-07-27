

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

  window.onload = function () {
    const twoMinutes = 120,
          display = document.getElementById("timer");
    startTimer(twoMinutes, display);
  };








// ================== dragable logic ===============


const items = document.querySelectorAll('.item')
const columns = document.querySelectorAll('.column')

// console.log(items);
// console.log(columns);

items.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
});



let dragItem = null;

function dragStart() {
    console.log('drag started');
    dragItem = this;
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    console.log('drag ended');
      this.className = 'item'
      dragItem = null;
}

function dragDrop() {
    console.log('drag dropped');
    this.append(dragItem);
    console.log(dragItem);
    console.log(columns);

}
columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
});

function dragOver() {
    // console.log('drag over');
}
function dragEnter() {
    // console.log('drag entered');
}
function dragLeave() {
    // console.log('drag left');
}


function dragOver(e) {
    e.preventDefault()
    console.log('drag over');
  }




const black = "#000000";
const white = "#ffffff";
const title = "This page intentionally left ";
const funcs = [
  do_Bart,
  do_black,
  do_dank,
  do_disco,
  do_blank,
]
let idx = 0;
let discoDivs = [];
let discoInterval = null;

// Run changePage every 2 seconds
setInterval(changePage, 2000);

// Change the page with the next function in the sequence
function changePage() {
  funcs[idx]();
  idx = (idx === funcs.length - 1) ? 0 : idx + 1;
}

function do_Bart() {
  document.getElementById("page-text").textContent = title + "Bart.";
  // add Bart image if not present
  if (!document.getElementById("image")) {
    let img = document.createElement("img");
    img.src = "bart_yellow.png";
    img.id = "image";
    document.getElementById("container").insertBefore(img, document.getElementById("page-text"));
  }
}

function do_black() {
  document.getElementById("page-text").textContent = title + "black.";
  document.getElementById("page-text").style.color = white;
  document.body.style.backgroundColor = black;
}

function do_dank() {
  document.getElementById("page-text").textContent = title + "dank.";
  document.getElementById("image").src = "bart_blue.png";
}

function do_disco() {
  document.getElementById("page-text").textContent = title + "disco.";
  document.getElementById("page-text").style.color = black;
  // create 25 disco divs
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let div = document.createElement("div");
      div.className = "disco";
      div.style.top = i * 20 + '%';
      div.style.left = j * 20 + '%';
      div.style.background = `rgb(${Math.floor(Math.random()*256)},
                                  ${Math.floor(Math.random()*256)},
                                  ${Math.floor(Math.random()*256)})`;
      document.getElementById("container").appendChild(div);
      discoDivs.push(div);
    }
  }
  // run every 0.3 seconds
  discoInterval = setInterval(function() {
    // randomize color
    for (let i = 0; i < discoDivs.length; i++) {
      discoDivs[i].style.background = `rgb(${Math.floor(Math.random()*256)},
                                           ${Math.floor(Math.random()*256)},
                                           ${Math.floor(Math.random()*256)})`;
    }
  }, 300);
}

function clear_disco() {
  clearInterval(discoInterval);
  for (let i = 0; i < discoDivs.length; i++) {
    discoDivs[i].remove();
  }
  discoDivs = []
}

function do_blank() {
  document.getElementById("page-text").textContent = title + "blank.";
  document.getElementById("page-text").style.color = black;
  document.body.style.backgroundColor = white;
  document.getElementById("image").remove();
  clear_disco();
}

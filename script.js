const black = "#000000";
const white = "#ffffff";
const title = "This page intentionally left ";
let idx = 0;
const funcs = [
  do_Bart,
  do_black,
  do_dank,
  do_blank,
]

// Run changePage every 1.5 seconds
setInterval(changePage, 1500);

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

function do_blank() {
  document.getElementById("page-text").textContent = title + "blank.";
  document.getElementById("page-text").style.color = black;
  document.body.style.backgroundColor = white;
  document.getElementById("image").remove();
}

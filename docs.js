import { setCaretIndex, applyCaret } from "../utils/caret.js";
import { selectText as selectTextAll } from "../utils/selectDiv.js";

const $title = document.querySelector(".title");
const $docs = document.querySelector(".docs");

let titleState = "init";
let caret = null;

$title.addEventListener("click", (e) => {
  if (titleState === "init") selectTextAll($title);
});

$title.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    setCaretIndex();
    return;
  }
  if (e.key === "Escape") {
    setCaretIndex();
    return;
  }
  titleState = "stated";
});

window.addEventListener("keyup", (e) => {
  if (e.key === "0") {
    const selection = document.getSelection();
    caret = selection.getRangeAt(0);
  }
  if (e.key === "1") {
    const selection = document.getSelection();
    selection.removeAllRanges();
    selection.addRange(caret);
  }
});

$docs.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
  }
});

let timeout = null;
$docs.addEventListener("keyup", function (e) {
  clearTimeout(timeout);

  timeout = setTimeout(applyCaret, 1000);
});

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
  if (e.key === "Enter" || e.key === "Escape") {
    e.preventDefault();
    setCaretIndex(caret);
    $docs.focus();
    console.log($title.innerHTML);
    if ($title.innerHTML === "") {
      $title.innerHTML = "제목 없는 문서";
      titleState = "init";
    }
    return;
  }
  titleState = "stated";
});

let timeout = null;
$docs.addEventListener("keydown", () => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    caret = applyCaret(caret);
  }, 200);
});

$docs.addEventListener("click", () => {
  caret = applyCaret(caret);
});

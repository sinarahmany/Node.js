document.getElementById("myFrom").addEventListener("submit", event => {
  event.preventDefault();
  addToList(document.querySelector("#myInput").value);
});
let addToList = inputValue => {
  if (inputValue.trim() == "") {
    return;
  }
  document
    .getElementById("myList")
    .insertAdjacentHTML(
      "beforeend",
      `<li> ${inputValue} <button class="btn btn-danger" onclick="deleteThis(this)"> Delete </button> </li>`
    );
  document.querySelector("#myInput").value = "";
  document.querySelector("#myInput").focus();
};
let deleteThis = element => {
  element.parentElement.remove();
};

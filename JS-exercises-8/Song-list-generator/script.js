//Adding a new song
let list = document.getElementById("list");

function createNewEntry() {
  const songName = document.getElementById("name");
  const artistName = document.getElementById("artist");
  const runTime = document.getElementById("runtime");
  var newEntry = `
  <li>${name.value} ${artist.value} ${runtime.value}
  <img src="./trash-can.png" class="can" alt="deleting icon" /></li>`;
  list.innerHTML += newEntry;
  songName.value = "";
  artistName.value = "";
  runTime.value = "";
}

const clickSubmit = document.getElementById("submit");
clickSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  createNewEntry();
});

//Deleting a song
// NOTE FOR IVO
//COULDN"T SOLVE. I don't know why it doesn't delete when I click on the image. I am thinking maybe I add newEntry inside the function createNewEntry(). And it maybe because it is not a global var.
const deleteIcons = document.querySelectorAll(".can");
deleteIcons.forEach((deleteIcon) => {
  deleteIcon.addEventListener("click", (event) => {
    const listItem = deleteIcon.parentElement;
    listItem.remove();
  });
});

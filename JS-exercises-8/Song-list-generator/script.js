//Adding a new song
let list = document.getElementById("list");

function createNewEntry() {
  const songName = document.getElementById("name");
  const artistName = document.getElementById("artist");
  const runTime = document.getElementById("runtime");
  var newEntry = `
  <li>${name.value} ${artist.value} ${runtime.value}
  <img src="./trash-can.png" class="can imgclass" alt="deleting icon" /></li>`;
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
const ul = document.querySelector("ul");
ul.addEventListener("click", (event) => {
  console.dir(event.target);
  if (event.target.tagName === "IMG") {
    //Another way: if (event.target.classList.value.includes("can")) {
    const item = event.target.closest("li");
    item.remove();
  }
});

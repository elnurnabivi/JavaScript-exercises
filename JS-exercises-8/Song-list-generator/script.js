//Adding a new song
let list = document.getElementById("list");

function createNewEntry() {
  const songName = document.getElementById("name");
  const artistName = document.getElementById("artist");
  const runTime = document.getElementById("runtime");
  const newEntry = `
  <li>${name.value} ${artist.value} ${runtime.value}
  <img src="./trash-can.png" alt="deleting icon" /></li>`;
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

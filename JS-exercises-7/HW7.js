// +1.Ask user for age, if user is below 18, display a warning message that he is underaged, if he is over show him alcohol page
function checkAge() {
  const userAge = parseInt(prompt("Tell me your age"));
  console.log(userAge);

  if (userAge < 18) {
    alert("You are underaged");
    return;
  }
  return alert("You can use this website");
}

checkAge();

// +2. Add background color to each odd row

const bcgColor = document.querySelectorAll(".item");
for (let i = 0; i < bcgColor.length; i++) {
  if (i % 2 === 1) {
    bcgColor[i].style.backgroundColor = "lightblue";
  }
}

// + 3. Add Smith, Jeff and Larry in the top, middle and end of the list
const newSmith = document.createElement("li");
newSmith.innerText = "Smith";

const newJeff = document.createElement("li");
newJeff.innerText = "Jeff";

const newLarry = document.createElement("li");
newLarry.innerText = "Larry";

bcgColor[0].parentNode.insertBefore(newSmith, bcgColor[0]);

const middleIndex = Math.floor(bcgColor.length / 2);
bcgColor[middleIndex].parentNode.insertBefore(newJeff, bcgColor[middleIndex]);

bcgColor[bcgColor.length - 1].parentNode.appendChild(newLarry);

// + 4. Remove Mel
bcgColor.forEach((element) => {
  if (element.innerText === "Mel") {
    element.remove();
    // +5.Add a row that says that Mel has been removed form the list
    const removedMessage = document.createElement("li");
    removedMessage.innerText = "Mel has been removed form the list";
    bcgColor[bcgColor.length - 1].parentNode.appendChild(removedMessage);
  }
});

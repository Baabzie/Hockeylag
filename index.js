

let playerInput = document.querySelector("#nameInput");
let addPlayerBtn = document.querySelector("#addPlayer");
let teamAList = document.querySelector("#lagA");
let teamBList = document.querySelector("#lagB");
let titleA = document.querySelector("#titleA");
let titleB = document.querySelector("#titleB");
let changeA = document.querySelector("#changeA");
let changeB = document.querySelector("#changeB");
let changeABtn = document.querySelector("#changeABtn");
let changeBBtn = document.querySelector("#changeBBtn");


function changeTeamName(newName, h2) {
    let value = newName.value;
    h2.innerText = value;
};

changeABtn.addEventListener("click", () => {changeTeamName(changeA, titleA)});
changeBBtn.addEventListener("click", () => {changeTeamName(changeB, titleB)});
 
let deletePlayer = (event) => {
    event.target.parentElement.remove();
};

let changeTeam = (event) => {
    let currentA = document.querySelectorAll("#lagA li");
    let currentB = document.querySelectorAll("#lagB li");
    if ((event.target.parentElement.parentElement === teamAList) && (currentB.length < 5)) {
        teamBList.append(event.target.parentElement);
    } else if ((event.target.parentElement.parentElement === teamBList) && (currentA.length < 5)) {
        teamAList.append(event.target.parentElement);
    } else {
        alert("Laget du vill byta spelaren till är fullt!")
    }
};

addPlayerBtn.addEventListener("click", () => {
    let player = document.createElement("li");
    let value = playerInput.value;
    let currentA = document.querySelectorAll("#lagA li");
    let currentB = document.querySelectorAll("#lagB li");
    
    let deleteBtn = document.createElement("button"); 
    deleteBtn.innerText = "Ta bort";
    deleteBtn.addEventListener ("click", deletePlayer);

    let changeTeamBtn = document.createElement("button");
    changeTeamBtn.innerText = "Ändra lag";
    changeTeamBtn.addEventListener ("click", changeTeam);

    player.innerText = value;
    player.append(deleteBtn);
    player.append(changeTeamBtn);

    if (currentA.length < 5) {
        teamAList.append(player);
    } else if (currentB.length < 5) {
        teamBList.append(player);
    } else {
        alert("Lagen är fulla!");
    }
    playerInput.value = ""; 
});

//hallojhalloj
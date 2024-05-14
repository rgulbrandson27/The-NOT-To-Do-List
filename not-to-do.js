const challengeTableBody = document.getElementById("challenge-table-body");
const newChallengeItem = document.getElementById("challengeInputItem");

function addNewChallenge(event) {
  event.preventDefault();
  console.log("clicked");
  console.log(newChallengeItem.value);

  const newChallengeRow = document.createElement("tr");

  newChallengeRow.innerHTML = `
    <td>${challengeTableBody.children.length + 1}</td>
    <td class="left-align">${newChallengeItem.value}</td>
    <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
    <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
    <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
    <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
    <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
    <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
    <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
    
    
    <td><button class="badge text-bg-secondary"/></button>
    <td><button class="btn btn-smaller btn-info"/></button>
    <td><button class="btn btn-smaller btn-outline-danger"/></button>

    `;

  challengeTableBody.appendChild(newChallengeRow);

  newChallengeItem.value = "";
}

// function updateWeekNumber {

// }

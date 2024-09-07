const challengeTableBody = document.getElementById("challenge-table-body");
const newChallengeItem = document.getElementById("challengeInputItem");

function addNewChallenge(event) {
  event.preventDefault();
  console.log(newChallengeItem.value);

  const newChallengeRow = document.createElement("tr");

  newChallengeRow.innerHTML = `
              <td class="col col-spacer"></td>
              <td scope="row">${challengeTableBody.children.length + 1}</td>
              <td class="col col-spacer"></td>
              <td class="text-start fs-6">${newChallengeItem.value}</td>
                      <td><input type="checkbox" class="checkbox" aria-label="checkbox"/></td>
                      <td><input type="checkbox" class="checkbox" aria-label="checkbox"/></td>
                      <td><input type="checkbox" class="checkbox" aria-label="checkbox"/></td>
                      <td><input type="checkbox" class="checkbox" aria-label="checkbox"/></td>
                      <td><input type="checkbox" class="checkbox" aria-label="checkbox"/></td>
                      <td><input type="checkbox" class="checkbox" aria-label="checkbox"/></td>
                      <td><input type="checkbox" class="checkbox col-day-last me-2" aria-label="checkbox"/></td>
                      <td class="col col-spacer"></td>

                      <td class="col-result icon"><div class="oval m-auto"></div></td>
                      <td class="col-result icon"><div class="oval m-auto"></div></td> 
                      <td class="col-result icon"><div class="oval m-auto"></div></td>
                      <td class="col col-spacer"></td>
               
                      <td><img class="icon col-dispose trash" src="images/delete.png"></td>
                      <td><img class="icon col-dispose reset" src="images/reset.png"></td>
                      <td class="col col-spacer"></td>
              `;

      challengeTableBody.appendChild(newChallengeRow);

      newChallengeItem.value = "";

      const deleteButton = newChallengeRow.querySelector(".trash");
      deleteButton.addEventListener("click", () => {
        newChallengeRow.remove();
      });
      const resetButton = newChallengeRow.querySelector(".reset");
      resetButton.addEventListener("click", () => {
      resetCheckboxes(newChallengeRow);
      });
}

function deleteChallengeRow(event) {
  const row = event.target.closest('tr');
  row.remove();
}

function resetCheckboxes(row) {
  const checkboxes = row.querySelectorAll(".checkbox");
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}

function resetChallengeRow(event) {
  const row = event.target.closest('tr');
  resetCheckboxes(row);
}


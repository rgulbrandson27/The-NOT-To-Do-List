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





  // const checkmark = document.createElement("img");
  // checkmark.setAttribute("src", "images/checkmark");

  // const retry = document.createElement("img");
  // const blunder = document.createElement("img");


  // const checkboxes = newChallengeRow.querySelectorAll(".checkbox");
  // checkboxes.forEach(checkbox => {
  //   checkbox.addEventListener('change', () => updateResultStatus(newChallengeRow));
  // });




  // if (count >= 6) {
  //   const kickedButton = row.querySelector(".result.kicked");
  //   if (kickedButton) {
  //     kickedButton.appendChild(checkmark.cloneNode());
    // if (kickedButton) {}    img.src = 'images/checkmark.png'
    // img.className = "result-image"
    // kickedButton.append(img);
    // button.style.backgroundImage = "url('images/checkmark.png')";
    // button.className = "btn btn-smaller result kicked";
  // } else if (count >= 3) {
  //   const retryButton = row.querySelector(".result.retry");
  //   if (retryButton) {
  //     retryButton.appendChild(retry.cloneNode());
       // Us

      //  <td>${challengeTableBody.children.length + 1}</td>
      //  <td class="left-align">${newChallengeItem.value}</td>
      //  <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
      //  <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
      //  <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
      //  <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
      //  <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
      //  <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
      //  <td><input class="form-check-input checkbox col-day" type="checkbox" value="" aria-label="checkbox"/></td>
       
      //  <td><button class="btn btn-smaller result"/></button></td>
      //  <td><button class="btn btn-smaller result"/></button></td>
      //  <td><button class="btn btn-smaller result"/></button></td>
   
      //  <td><img id="trash" class="icon" src="images/delete.png"></td>
      //  <td><img id="reset" class="icon" src="images/reset.png"></td>



// function updateResultStatus(row) {
//   const checkboxes = row.querySelectorAll(".checkbox");
//   let count = 0;

//   checkboxes.forEach(checkbox => {
//     if (checkbox.checked) {
//       count++;
//     }
//   });

//   const resultButtons = row.querySelectorAll(".result");

//   resultButtons.forEach(button) => 
//   if (count >= 6) {
//     resultButton.textContent = "";
//     resultButton.className = "btn btn-smaller result kicked";
//   } else if (count >= 3) {
//     resultButton.textContent = "";
//     resultButton.class = "btn btn-smaller result retry";
//   } else {
//     resultButton.textContent = "";
//     resultButton.class = "btn btn-smaller result blunder";
//   }
// }


  // const checkmark = document.createElement("img");
  // checkmark.id = "checkmark";
  // checkmark.src = 'images/checkmark.png';
  // checkmark.className = 'result-image';

  // const retry = document.createElement("img");
  // retry.id = "retry";
  // retry.src = 'images/retry.png';
  // retry.className = 'result-image';

  // const blunder = document.createElement("img");
  // blunder.id = "blunder";
  // blunder.src = 'images/blunder.png';
  // blunder.className = 'result-image';

  // const trash = document.createElement("img");
  // trash.id = "trash";
  // trash.src = 'images/delete.png';
  // trash.className = 'result-image';

  // const reset = document.createElement("img");
  // reset.id = "retry";
  // reset.src = 'images/retry.png';
  // reset.className = 'result-image';




    // button.style.backgroundImage = "url('images/retry.png')";
    // button.className = "btn btn-smaller result retry";
  // } else {


    // button.style.backgroundImage = "url('images/blunder.png')";
    // button.className = "btn btn-smaller result blunder";
  
  // const blunderButton = row.querySelector(".result.blunder");
  //   if (blunderButton) {
  //     blunderButton.appendChild(blunder.cloneNode());
  // }
      // const resetButton = document.createElement("p");
    // resetButton.className = "reset";
    // resetButton.textContent = "RESET";

    // const removeButton = document.createElement("p");
    // removeButton.className = "remove";
    // removeButton.textContent = "REMOVE";

    // newChallengeRow.appendChild(resetButton);
    // newChallengeRow.appendChild(removeButton);
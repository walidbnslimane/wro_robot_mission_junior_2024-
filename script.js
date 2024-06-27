function calculatePoints() {
  let redComplete = parseInt(document.getElementById("redComplete").value) * 8;
  let redPartial = parseInt(document.getElementById("redPartial").value) * 4;
  let redCompletee = parseInt(document.getElementById("redCompletee").value) * 8;
  let redPartiale = parseInt(document.getElementById("redPartiale").value) * 4;
  let additionalPoints1 = parseInt(document.getElementById('additionalPoints1').value);
  let eBike1 = parseInt(document.getElementById("eBike1").value) ;
  let eBike2 = parseInt(document.getElementById("eBike2").value) ;
  let cableTouching = parseInt(document.getElementById("cableTouching").value);
  let cableComplete = parseInt(document.getElementById("cableComplete").value);
  let apartmentHouse1 = parseInt(document.getElementById("apartmentHouse1").value);
  let apartmentHouse2 = parseInt(document.getElementById("apartmentHouse2").value);
  let fence1 = parseInt(document.getElementById("fence1").value);
  let fence2 = parseInt(document.getElementById("fence2").value);
  let fence3 = parseInt(document.getElementById("fence3").value);

  let totalPoints = redComplete + redPartial  + redCompletee + redPartiale + additionalPoints1 + eBike1 +  eBike2 + cableTouching + cableComplete + apartmentHouse1 + apartmentHouse2 + fence1 + fence2 + fence3 ;

  document.getElementById("totalPoints").innerHTML = totalPoints + " / 120";
}

function resetForm() {
  document.getElementById("redComplete").value = "0"
  document.getElementById("redPartial").value = "0"
  document.getElementById("redCompletee").value = "0"
  document.getElementById("redPartiale").value = "0"
  document.getElementById('additionalPoints1').value = "0"
  document.getElementById("eBike1").value = "0"
  document.getElementById("eBike2").value = "0"
  document.getElementById("cableTouching").value = "0"
  document.getElementById("cableComplete").value = "0"
  document.getElementById("apartmentHouse1").value = "0"
  document.getElementById("fence1").value = "0"
  document.getElementById("fence2").value = "0"
  document.getElementById("fence3").value = "0"
  document.getElementById("totalPoints").innerHTML = "0 / 120";
  updateRedPartialOptions();
}

document.getElementById("redComplete").addEventListener("change", updateRedPartialOptions);

function updateRedPartialOptions() {
  let redComplete = parseInt(document.getElementById("redComplete").value);
  let redPartial = document.getElementById("redPartial");

  if (redComplete === 0) {
    redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='0'>2</option><option value='24'>3</option><option value='32'>4</option><option value='32'>5</option><option value='32'>6</option>";
} 
  if (redComplete === 1) {
    redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option><option value='24'>3</option><option value='32'>4</option><option value='32'>5</option>";
} 
if (redComplete === 2) {
  redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option><option value='24'>3</option><option value='32'>4</option>";
} 
  if (redComplete === 3) {
      redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option><option value='24'>3</option>";
  }
  if (redComplete === 4) {
    redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option>";
} 
if (redComplete === 5) {
  redPartial.innerHTML = "<option value='0'>0</option><option value='8'>1</option>";
} 
if (redComplete === 6) {
  redPartial.innerHTML = "<option value='0'>0</option>";
} 

}

document.getElementById("redCompletee").addEventListener("change", updateRedPartialOptionse);

function updateRedPartialOptionse() {
  let redCompletee = parseInt(document.getElementById("redCompletee").value);
  let redPartiale = document.getElementById("redPartiale");

  if (redCompletee === 0) {
    redPartiale.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option><option value='24'>3</option>";
} 
  if (redCompletee === 1) {
    redPartiale.innerHTML = "<option value='0'>0</option><option value='8'>1</option><option value='16'>2</option>";
} 
if (redCompletee === 2) {
  redPartiale.innerHTML = "<option value='0'>0</option><option value='8'>1</option>";
} 
  if (redCompletee === 3) {
      redPartiale.innerHTML = "<option value='0'>0</option>";
  }

}

document.getElementById("cableComplete").addEventListener("change", updatecableCompleteOptions);

        function updatecableCompleteOptions() {
            let cableTouching = document.getElementById("cableTouching");
            let cableCompleteValue = parseInt(document.getElementById("cableComplete").value);

            if (cableCompleteValue === 0) {
                cableTouching.innerHTML = "<option value='0'>no</option><option value='5'>yes</option>";
            } else if (cableCompleteValue === 11) {
                cableTouching.innerHTML = "<option value='0'>no</option>";
            }
        }

        document.getElementById("cableTouching").addEventListener("change", updatecableTouchingOptions);

        function updatecableTouchingOptions() {
            let cableComplete = document.getElementById("cableComplete");
            let cableTouchingValue = parseInt(document.getElementById("cableTouching").value);

            if (cableTouchingValue === 0) {
                cableComplete.innerHTML = "<option value='0'>no</option><option value='11'>yes</option>";
            } else if (cableTouchingValue === 5) {
                cableComplete.innerHTML = "<option value='0'>no</option>";
            }
        }




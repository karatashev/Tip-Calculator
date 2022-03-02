

//Dom elements
const sumInput = document.getElementById('sum');
const peopleInput = document.getElementById('people');
const customPercentInput = document.getElementById('custom')
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fifteen = document.getElementById('fifteen');
const twentyfive = document.getElementById('twentyfive');
const fifty = document.getElementById('fifty');
const displayTipPerPerson = document.querySelector('.amount-per-person');
const displayTip = document.querySelector('.total-tip');
const resetBtn = document.querySelector('.btn-reset');
const alertMsg = document.querySelector('h4 span');

let sumAmount, numOfPeople, customPercent, totalTip, totalTipPerPerson;


//-------------------Reset Btn --------------------->
function RESET() {
  sumInput.value = "";
  peopleInput.value = ""; 
  peopleInput.classList.remove("empty");
  customPercentInput.value = "";
  percentButtons.forEach(btn => {
    btn.classList.remove("click")
  });
  displayTip.textContent = "$0.00";
  displayTipPerPerson.textContent = "$0.00";
  alertMsg.classList.remove("empty");

}

//-------------Activate Reset Btn------------------->
sumInput.addEventListener("change", () => {
  sumAmount = Number(sumInput.value);
  numOfPeople = Number(peopleInput.value);

  if (sumAmount !== 0) {
    resetBtn.removeAttribute("disabled");
  }

  if (numOfPeople === 0)  {
    alertMsg.classList.add("empty");
    peopleInput.classList.add("empty");
  }
});


//--------------Select percent btns & activate----->
const percentButtons = [five, ten, fifteen, twentyfive, fifty, customPercentInput];
let percent = 0;

percentButtons.forEach( btn => {
  btn.addEventListener('pointerdown', () => { //The pointerdown event is fired when a pointer becomes active
    btn.classList.add('click');
    percentButtons.forEach( btnInner => {
      if (btnInner !== btn) btnInner.classList.remove('click');
    });
    if (btn.id !== 'custom') percent = parseInt(btn.innerHTML); //converts string to integer
  });
})

//-------------Validate number of people--------->
peopleInput.addEventListener("change", () => {
  numOfPeople = Number(peopleInput.value);
  if (numOfPeople !== 0) {
    alertMsg.classList.remove("empty");
    peopleInput.classList.remove("empty");
  } else if (numOfPeople === 0) {
    alertMsg.classList.add("empty");
    peopleInput.classList.add("empty");
  }
});


//-------------Calculate total tip & per person----->
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', () => { // change event is fired when input element value is committed by the user

    sumAmount = Number(sumInput.value);
    numOfPeople = Number(peopleInput.value);
    customPercent = Number(customPercentInput.value);

    if (customPercent > 100) {
      alert("Percentage can't be more than 100!")
      RESET();
    }

    if (percent === 0) {
      percent = customPercent;
    }

    if (sumAmount !== 0 && numOfPeople !==0 && percent !== 0) {
      totalTip = percent * (sumAmount / 100);
      totalTipPerPerson = totalTip / numOfPeople;

      displayTip.textContent = '$' + totalTip.toFixed(2); //amount with 2 decimals
      displayTipPerPerson.textContent = '$' + totalTipPerPerson.toFixed(2) //amount with 2 decimals

    }
  });
});


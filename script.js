

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
const alert = document.querySelector('h4 span');

let sumAmount, numOfPeople, customPercent, totalTip, totalTipPerPerson;

//to choose the tip & the percent btns to stay active
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

//Calculate the TIP total and per person 
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', () => { // change event is fired when input element         value is committed by the user

    sumAmount = Number(sumInput.value);
    numOfPeople = Number(peopleInput.value);
    customPercent = Number(customPercentInput.value);

    if (customPercent > 100) {
      alert("Percentage can't be more than 100!")
      // resetBtn();
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


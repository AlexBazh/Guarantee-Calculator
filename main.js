let takingDate = document.querySelector('#taking_date');
let count = document.querySelector('#count');
let notificationDate = document.querySelector('#notification_date');
let endRepair = document.querySelector('#end_repair');
let countButton = document.querySelector('#countButton');
let newGuarantee = document.querySelector('.newGuarantee');
let resultDisplay = document.querySelector('.resultDisplay');
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let guaranteeUntil = document.querySelector('.guaranteeUntil');

var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

countButton.onclick =  function finalDate (){
    let guaranteeDate = new Date(takingDate.value);
    guaranteeDate.setFullYear(guaranteeDate.getFullYear() + parseFloat(count.value));
    let noteDate = new Date(notificationDate.value);
    let endDate = new Date(endRepair.value);
    let difference = (endDate - noteDate) / (3600 * 1000 * 24);
    guaranteeDate.setDate(guaranteeDate.getDate() + difference);
    newGuarantee.textContent = guaranteeDate.toLocaleString("ru", options);
    resultDisplay.classList.add('showBlock');
    if (newGuarantee.textContent === 'Invalid Date'){
      newGuarantee.textContent = 'Заполните все поля';
      newGuarantee.classList.add('error');
      guaranteeUntil.classList.add('hideBlock');
    } else {
      guaranteeUntil.classList.remove('hideBlock');
      newGuarantee.classList.remove('error');
    }
};

plus.onclick = function(){
  count.value = 1 + parseFloat(count.value)
};

minus.onclick = function(){
  count.value -= 1;
  if (count.value < 0){
    count.value = 0;
  };
};



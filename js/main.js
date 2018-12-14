let form1 = document.getElementById('form1');
let sum1 = document.getElementById('sum1');
let period1 = document.getElementById('period1');
let rate1 = document.getElementById('rate1');
let calc1 = document.getElementById('calc1');

let form2 = document.getElementById('form2');
let sum2 = document.getElementById('sum2');
let period2 = document.getElementById('period2');
let rate2 = document.getElementById('rate2');
let calc2 = document.getElementById('calc2');

calc1.onclick = function(){
	if (period1.value >= 30) {
		alert('Ошибка, банки не дают ипотеку более чем на 30 лет');
		return false;
	}
}


form1.addEventListener('submit', function(e) {
	let elem = document.createElement('div');
	e.preventDefault();
	elem.innerHTML = 'Ежемесячный платеж, в рублях: ' + calculator.getPayment(sum1.value, period1.value, rate1.value);
	form1.appendChild(elem);
}, false);

form2.addEventListener('submit', function(e) {
	let elem = document.createElement('div');
	e.preventDefault();
	console.log(sum2.value, payment2.value, rate2.value);
	elem.innerHTML = 'Срок, в месяцах: ' + calculator.getPeriod(sum2.value, payment2.value, rate2.value);
	form2.appendChild(elem);
}, false);
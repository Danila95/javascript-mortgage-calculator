let calculator = (function() {
	let module = {};

	/*	¬ычисление логарифма с произвольным основанием
		x - основание логарифма
		y - число, от которого требуетс€ найти логарифм
	*/
	function getBaseLog(x, y) {
		return Math.log(y) / Math.log(x);
	};

	/*	¬ычисл€ет ежемес€чный платЄж по сроку ипотеки
	 	sum - сумма кредита
	 	period - срок в годах
	 	rate - годова€ ставка в процентах
	 	return число или Nan
	*/
	module.getPayment = function(sum, period, rate) {
		let i, koef, result;

		// ставка в мес€ц
		i = (rate / 12) / 100;

		// коэффициент аннуитета
		koef = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);

		// итог
		result = sum * koef;

		// округлим до целых
		return result.toFixed();
	};

	/*	¬ычисл€ет период выплаты ипотеки по ежемес€чному платежу
		sum - сумма кредита
		plat - ежем€с€чный платеж
		rate - годова€ ставка в процентах
		return число или Nan
	*/
	module.getPeriod = function(sum, plat, rate) {
		let mm, i, result;

		// ставка в мес€ц
		i = (rate / 12) / 100;

		mm = plat / sum;
		result = getBaseLog(1 + i, -mm / (i - mm));

		// округлим до целых
		return Math.ceil(+result);
	};

	return module;
})();
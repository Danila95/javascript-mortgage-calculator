let calculator = (function() {
	let module = {};

	/*	���������� ��������� � ������������ ����������
		x - ��������� ���������
		y - �����, �� �������� ��������� ����� ��������
	*/
	function getBaseLog(x, y) {
		return Math.log(y) / Math.log(x);
	};

	/*	��������� ����������� ����� �� ����� �������
	 	sum - ����� �������
	 	period - ���� � �����
	 	rate - ������� ������ � ���������
	 	return ����� ��� Nan
	*/
	module.getPayment = function(sum, period, rate) {
		let i, koef, result;

		// ������ � �����
		i = (rate / 12) / 100;

		// ����������� ���������
		koef = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);

		// ����
		result = sum * koef;

		// �������� �� �����
		return result.toFixed();
	};

	/*	��������� ������ ������� ������� �� ������������ �������
		sum - ����� �������
		plat - ����������� ������
		rate - ������� ������ � ���������
		return ����� ��� Nan
	*/
	module.getPeriod = function(sum, plat, rate) {
		let mm, i, result;

		// ������ � �����
		i = (rate / 12) / 100;

		mm = plat / sum;
		result = getBaseLog(1 + i, -mm / (i - mm));

		// �������� �� �����
		return Math.ceil(+result);
	};

	return module;
})();
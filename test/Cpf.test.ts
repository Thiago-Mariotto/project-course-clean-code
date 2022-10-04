import Cpf from "../src/domain/entity/Cpf";

test('Valida um CPF', function () {
	const cpf = new Cpf('19361862170');
	expect(cpf).toBeTruthy();
});

test('Valida um CPF completo', function () {
	const cpf = new Cpf('193.618.621-70');
	expect(cpf).toBeTruthy();
});

const equalNumbers = [
	'111.111.111-11',
	'222.222.222-22',
];

test.each(equalNumbers)('Invalida CPF com números iguais', function (cpf) {
	expect(() => new Cpf(cpf)).toThrow('Invalid CPF');
});

const invalidCpfSize = [
	'19361862456',
	'19361862456323'
];

test.each(invalidCpfSize)('Valida o tamanho do CPF', function (cpf) {
	expect(() => new Cpf(cpf)).toThrow('Invalid CPF');
});

const validCpfs = [
	'193.618.621-70',
	'090.058.940-08',
	'968.302.210-30'
];

test.each(validCpfs)('Verificia se é possível retornar o CPF', function (validCpf) {
	const cpf = new Cpf(validCpf);
	expect(cpf.value).toBe(validCpf);
});

test('Invalida um CPF undefined', function () {
	expect(() => new Cpf('')).toThrow('Invalid CPF');
})
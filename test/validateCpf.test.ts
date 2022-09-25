import { validateCpf } from "../src/cpf";

test('Quando o número for valido, retorna true', function () {
	const cpfIsValid = validateCpf('19361862170');
	expect(cpfIsValid).toBeTruthy();
});

test('Quando o número for < 11 caracteres ou > 14 caracteres, retorna "Invalid CPF"', function () {
	expect(() => validateCpf('1234567989')).toThrow(new Error('Invalid CPF'));
});

test('Quando o número for undefined/null retorna "Invalid CPF"', function () {
	expect(() => validateCpf('1234567989')).toThrow(new Error('Invalid CPF'));
});
import Cpf from "../src/Cpf";
import {
	incompleteCpf,
	invalidCpf,
	invalidCpf2,
	validCpf,
	validCpfWithChars
} from "./mocks/cpf.mock";


test('Quando o número do CPF for valido, retorna true', function () {
	const cpf = new Cpf(validCpf);
	expect(cpf).toBeTruthy();
});

test('É possível criar o CPF com ponto e hífen', function () {
	const cpf = new Cpf(validCpfWithChars);
	expect(cpf).toBeTruthy();
});

test('Quando o número for < 11 caracteres ou > 14 caracteres, retorna "Invalid CPF size"', function () {
	expect(() => new Cpf(invalidCpf)).toThrow('Invalid CPF');
	expect(() => new Cpf(invalidCpf2)).toThrow('Invalid CPF');
});

test('Quando o número for undefined/null retorna "Invalid CPF"', function () {
	expect(() => new Cpf(incompleteCpf)).toThrow('Invalid CPF');
});

test('Verificia se é possível retornar o CPF', function () {
	const cpf = new Cpf(validCpf);
	expect(cpf.value).toBe(validCpf);
});
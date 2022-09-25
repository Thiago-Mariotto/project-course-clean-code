const CPF_MAX_SIZE = 14;
const CPF_MIN_SIZE = 11;

function formatIsValid(cpf: string) {
	if (!cpf || cpf.length < CPF_MIN_SIZE || cpf.length > CPF_MAX_SIZE) { throw new Error("Invalid CPF"); }
	return true;
}

function parseOnlyNumbers(cpf: string) {
	return cpf
		.replace('.', '')
		.replace('.', '')
		.replace('-', '')
		.replace(" ", "");
};

function calculateModule(value: number, mod: number) { return (value % mod); }

function verificationNumber(value: number) {
	return (value < 2) ? 0 : 11 - value;
}

export function validateCpf(cpf: string) {
	if (!formatIsValid(cpf)) return false;
	const parsedCPF = parseOnlyNumbers(cpf);

	let verifyFirstDigit: number = 0, verifySecondDigit: number = 0;
	let iterationDigit: number;

	for (let cpfPosition = 1; cpfPosition < parsedCPF.length - 1; cpfPosition++) {
		iterationDigit = parseInt(cpf.substring(cpfPosition - 1, cpfPosition));
		verifyFirstDigit += ((11 - cpfPosition) * iterationDigit);
		verifySecondDigit += ((12 - cpfPosition) * iterationDigit);
	}

	let digitTenModule = calculateModule(verifyFirstDigit, 11);
	const tenDigit = verificationNumber(digitTenModule);

	verifySecondDigit += 2 * tenDigit;
	const digitElevenModule = calculateModule(verifySecondDigit, 11);
	const elevenDigit = verificationNumber(digitElevenModule);

	let originalCpfDigits = cpf.substring(cpf.length - 2, cpf.length);
	let verifiedDigits = `${tenDigit}${elevenDigit}`;

	return originalCpfDigits == verifiedDigits;
};
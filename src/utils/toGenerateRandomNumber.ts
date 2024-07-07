export function toGenerateRandomNumber(
	count: number,
	lowerBound: number,
	upperBound: number
) {
	if (count > upperBound - lowerBound + 1) {
		throw new Error(
			'Jumlah angka yang diminta lebih besar dari rentang yang tersedia.'
		)
	}

	let numbers: number[] = []

	while (numbers.length < count) {
		let randomNumber =
			Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound

		if (!numbers.includes(randomNumber)) {
			numbers.push(randomNumber)
		}
	}

	return numbers
}

"use strict"
class XBigFraction {
	constructor(numerator, denominator) {
		this.numerator = new BigNumber(numerator);
		this.denominator = new BigNumber(denominator);
	}
	multiply(fraction) {
		return new XBigFraction(this.numerator.mul(fraction.numerator), this.denominator.mul(fraction.denominator));
	}
	divide(fraction) {
		return this.multiply(new XBigFraction(fraction.denominator, fraction.numerator));
	}
	add(fraction) {
		var newDenominator = this.denominator.mul(fraction.denominator);
		var newNumerator = this.numerator.mul(fraction.denominator).add(fraction.numerator.mul(this.denominator));
		return new XBigFraction(newNumerator, newDenominator);
	}
	subtract(fraction) {
		return this.add(new XBigFraction(fraction.numerator.mul(-1), fraction.denominator));
	}
	static gcd(a, b) {
		return !b.toNumber() ? a : XBigFraction.gcd(b, a.mod(b));
	}
	reduce() {
		var gcd = XBigFraction.gcd(this.numerator, this.denominator);
		return new XBigFraction(this.numerator.div(gcd), this.denominator.div(gcd));
	}
	toString() {
		return this.numerator + "/" + this.denominator;
	}
	toDecimal() {
		return this.numerator.div(this.denominator);
	}
}

"use strict"
class XFraction {
	constructor(numerator, denominator) {
		this.numerator = numerator;
		this.denominator = denominator;
	}
	multiply(fraction) {
		return new XFraction(this.numerator * fraction.numerator, this.denominator * fraction.denominator);
	}
	divide(fraction) {
		return this.multiply(new XFraction(fraction.denominator, fraction.numerator));
	}
	add(fraction) {
		var newDenominator = this.denominator * fraction.denominator;
		var newNumerator = (this.numerator * fraction.denominator) + (fraction.numerator * this.denominator);
		return new XFraction(newNumerator, newDenominator);
	}
	subtract(fraction) {
		return this.add(new XFraction(-fraction.numerator, fraction.denominator));
	}
	static gcd(a, b) {
		return !b ? a : XFraction.gcd(b, a % b);
	}
	reduce() {
		var gcd = XFraction.gcd(this.numerator, this.denominator);
		return new XFraction(this.numerator/gcd, this.denominator/gcd);
	}
	toString() {
		return this.numerator + "/" + this.denominator;
	}	
	toDecimal() {
		return this.numerator / this.denominator;
	}
}

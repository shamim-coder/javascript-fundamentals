function interestRate(principalRate, year) {
    
    if (principalRate >= 50000) {
        if ( year >= 2) {
            annualRateToDecimal =  8 / 100;
        } else {
            annualRateToDecimal =  5 / 100;
        }
    } else if (principalRate < 50000 ) {
        if ( year >= 2) {
            annualRateToDecimal =  12 / 100;
        } else {
            annualRateToDecimal =  10 / 100;
        }
    }
    monthlyInterestRate = (annualRateToDecimal / 12);

    yearlyInterest = annualRateToDecimal * principalRate;
    monthlyInterest = monthlyInterestRate * principalRate; 

    console.log('your yearly interest ' + yearlyInterest);
    console.log('your monthly interest ' + monthlyInterest);
    let amountOfYear = (((yearlyInterest * year) + principalRate) / year);
    console.log('your interest amount of year ' + amountOfYear);
    console.log('total amount with interest in ' + year + (year>1?' years: ':' year: ') + amountOfYear * year);
}
interestRate(40000, 15); 
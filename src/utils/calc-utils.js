export const calculateGrowth = (initialAmount, percentage) => {
    const results = [];
    let amount = initialAmount;

    for (let year = 1; year <= 10; year++) {
        const interest = (amount * percentage) / 100;
        amount += interest;
        results.push({
            year,
            amount: amount.toFixed(2),
            interest: interest.toFixed(2),
        });
    }

    return results;
};
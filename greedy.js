(function () {
    const denominations = [25, 10, 5, 1]; // US coins in cents
    const changeBtn = document.getElementById('changeBtn');
    const amountInput = document.getElementById('amount');
    const resultsDiv = document.getElementById('results');

    function makeChange() {
        let amount = parseInt(amountInput.value, 10);
        if (isNaN(amount) || amount < 0) {
            resultsDiv.textContent = 'Please enter a valid non-negative amount.';
            return;
        }

        const result = [];
        denominations.forEach(coin => {
            const count = Math.floor(amount / coin);
            if (count > 0) {
                result.push(`${count} \u00d7 ${coin}¢`);
                amount -= count * coin;
            }
        });
        resultsDiv.textContent = amount === 0 ? result.join(', ') : `Cannot make exact change. Remaining: ${amount}¢`;
    }

    changeBtn.addEventListener('click', makeChange);
})();

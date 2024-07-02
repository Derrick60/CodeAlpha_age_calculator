document.getElementById('ageCalculator').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const dob = document.getElementById('dob').value;
    if (dob === '') {
        alert('Please enter your date of birth.');
        return;
    }

    const dobDate = new Date(dob);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - dobDate.getFullYear();
    let months = currentDate.getMonth() - dobDate.getMonth();
    let days = currentDate.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerHTML = `You are <span>${years} </span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
});

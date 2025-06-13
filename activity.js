(function () {
    const activities = [];

    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
    const addBtn = document.getElementById('addBtn');
    const selectBtn = document.getElementById('selectBtn');
    const tableBody = document.querySelector('#activityTable tbody');
    const results = document.getElementById('results');

    function updateTable() {
        tableBody.innerHTML = '';
        activities.forEach((act, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${index + 1}</td><td>${act.start}</td><td>${act.end}</td>`;
            tableBody.appendChild(row);
        });
    }

    function addActivity() {
        const start = parseInt(startInput.value, 10);
        const end = parseInt(endInput.value, 10);
        if (isNaN(start) || isNaN(end) || start >= end) {
            alert('Please enter valid start and end times (start < end).');
            return;
        }
        activities.push({ start, end });
        startInput.value = '';
        endInput.value = '';
        updateTable();
    }

    function selectActivities() {
        const sorted = activities.slice().sort((a, b) => a.end - b.end);
        const selected = [];
        let lastEnd = -Infinity;
        sorted.forEach(act => {
            if (act.start >= lastEnd) {
                selected.push(act);
                lastEnd = act.end;
            }
        });
        results.innerHTML = '';
        selected.forEach(act => {
            const li = document.createElement('li');
            li.textContent = `Start: ${act.start}, End: ${act.end}`;
            results.appendChild(li);
        });
    }

    addBtn.addEventListener('click', addActivity);
    selectBtn.addEventListener('click', selectActivities);
})();

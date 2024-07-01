document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        document.getElementById('currentTimeUTC').textContent = now.toUTCString().split(' ')[4];
        document.getElementById('currentDay').textContent = now.toUTCString().split(',')[0];
    }
    updateTime();
    setInterval(updateTime, 1000); // Update every second
});

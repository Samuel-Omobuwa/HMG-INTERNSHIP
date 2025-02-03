function updateUTCTime() {
    const utcTimeElement = document.querySelector("[data-testid='currentTimeUTC']");
    const now = new Date();
    utcTimeElement.textContent = `UTC Time: ${now.toUTCString()}`;
}
setInterval(updateUTCTime, 1000);
updateUTCTime();
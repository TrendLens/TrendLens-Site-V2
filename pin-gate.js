
function verifyPin() {
    const pin = document.getElementById('pinInput').value;
    const msg = document.getElementById('statusMsg');
    if (pin === '0121') {
        window.location.href = 'predict.html';
    } else if (pin === 'V9#r3-Alpha712!') {
        window.location.href = 'founder.html';
    } else {
        msg.textContent = '❌ Incorrect PIN';
        msg.style.color = 'red';
    }
}

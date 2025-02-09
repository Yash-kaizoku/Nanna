const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseBtn.addEventListener('click', () => {
    surpriseMessage.classList.remove('hidden');
    surpriseBtn.textContent = "You're Amazing!";
});
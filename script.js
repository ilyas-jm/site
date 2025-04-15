document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');

        toggleButton.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function copyEmail() {
    const emailField = document.getElementById("email");
    emailField.select();
    emailField.setSelectionRange(0, 99999);
    document.execCommand("copy");

    const btn = document.querySelector('.email-btn');
    const originalText = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => {
        btn.textContent = originalText;
    }, 1500);
}

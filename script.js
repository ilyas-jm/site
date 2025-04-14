document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');
        
        // Change icon based on mode
        if(body.classList.contains('dark')) {
            toggleButton.textContent = '☀️';
        } else {
            toggleButton.textContent = '🌙';
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

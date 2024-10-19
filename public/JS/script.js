document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.education-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 1 /* Animation triggers when 20% of the item is visible */
    });

    items.forEach(item => {
        observer.observe(item);
    });
});


// homeskill
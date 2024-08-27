const switchElement = document.querySelector('.switch');

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
})
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove 'active' class from other cards
        document.querySelectorAll('.project-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
            }
        });
        
        // Toggle 'active' class on the clicked card
        card.classList.toggle('active');
    });
});
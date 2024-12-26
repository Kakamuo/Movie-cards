function toggleDetails(button) {
    const card = button.closest('.card');
    const description = card.querySelector('.movie-description');

    // Close all other Cards
    document.querySelectorAll('.card').forEach(otherCard => {
        if(otherCard !== card) {
            otherCard.classList.remove('expanded');
            otherCard.querySelector('.movie-description').classList.remove('expanded');
            otherCard.querySelector('.read-more').textContent = 'Read More';
        }
    });
     
    // Toggle current card
        if (description.classList.contains('expanded')) {
          description.classList.remove('expanded');
          card.classList.remove('expanded');
          button.textContent = 'Read More';
        } else {
          description.classList.add('expanded');
          card.classList.add('expanded');
          button.textContent = 'Show Less';
        } 
    
} 





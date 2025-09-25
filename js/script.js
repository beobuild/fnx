// Email validation functionality
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('email-verification-form');
    const emailInput = document.getElementById('email-input');
    const errorMessage = document.getElementById('error-message');
    const emailFormContainer = document.getElementById('email-form-container');
    const personalInfoContent = document.getElementById('personal-info-content');
    
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email) {
            showError('Vui lòng nhập email');
            return;
        }
        
        if (!emailRegex.test(email)) {
            showError('Email không đúng định dạng');
            return;
        }
        
        // Hide form and show content
        emailFormContainer.classList.add('hide');
        personalInfoContent.classList.remove('hide');
    });
    
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hide');
        
        setTimeout(() => {
            errorMessage.classList.add('hide');
        }, 3000);
    }
});

// Professional info toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const profSections = document.querySelectorAll('.prof-section');
    
    profSections.forEach(section => {
        const header = section.querySelector('.section-header');
        const content = section.querySelector('.section-content') || 
                       section.querySelector('.experience-item, .education-item, .activity-item, .hobbies-grid, .language-item, .skill-item');
        
        if (header && content) {
            // Initially hide content except headers
            const allContent = section.querySelectorAll('.experience-item, .education-item, .activity-item, .hobbies-grid, .language-item, .skill-item');
            allContent.forEach(item => {
                if (item.parentElement === section) {
                    item.style.display = 'none';
                }
            });
            
            // Add view more button
            const viewMoreBtn = document.createElement('button');
            viewMoreBtn.className = 'view-more-btn';
            viewMoreBtn.textContent = 'View More';
            header.appendChild(viewMoreBtn);
            
            // Add hover effect to section
            section.addEventListener('mouseenter', function() {
                section.classList.add('hovered');
            });
            
            section.addEventListener('mouseleave', function() {
                section.classList.remove('hovered');
            });
            
            // Toggle content on button click
            viewMoreBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                
                const isVisible = viewMoreBtn.textContent === 'View Less';
                
                allContent.forEach(item => {
                    if (item.parentElement === section) {
                        item.style.display = isVisible ? 'none' : 'flex';
                    }
                });
                
                // Special handling for hobbies grid
                const hobbiesGrid = section.querySelector('.hobbies-grid');
                if (hobbiesGrid) {
                    hobbiesGrid.style.display = isVisible ? 'none' : 'grid';
                }
                
                viewMoreBtn.textContent = isVisible ? 'View More' : 'View Less';
            });
        }
    });
});
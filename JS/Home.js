document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.classList.add('highlight');
        });
        
        link.addEventListener('mouseleave', function() {
            this.classList.remove('highlight');
        });
    });

    // Randomly highlight a nav item every 5 seconds
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * navLinks.length);
        navLinks[randomIndex].classList.add('highlight');
        setTimeout(() => {
            navLinks[randomIndex].classList.remove('highlight');
        }, 1000);
    }, 5000);
});

// Add animation to Learning Corner cards
const learningCards = document.querySelectorAll('.learning-card');
    learningCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});
// Footer 
const footerLinks = document.querySelectorAll('.footer a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#007bff';
        });
        link.addEventListener('mouseleave', function() {
            this.style.color = '#fff';
        });
    });
});

const slides = document.querySelectorAll(".slide")
var counter = 0;
//console.log(slides)
slides.forEach(
    (slide, index) => {
    slide.style.left = ${index * 100}%
    }
)
const goPrev = () => {
    counter-- 
    slideImage()
}   
const goNext = () => {
    counter++ 
    slideImage()
}
const slideImage =() => {
    slides.forEach(
        (slide) => {
            slide.style.transform = translateX(-${counter * 100}%)
        }
    )
}
document.addEventListener("scroll", function() {
    let flower = document.querySelector(".moving-flower");
    let scrollY = window.scrollY;
    flower.style.transform = `translateY(${scrollY * 0.2}px)`;
});

// Confetti animation using canvas
function startConfetti() {
    var myConfetti = confetti.create(document.getElementById("confetti-canvas"), {
        resize: true,
        useWorker: true
    });

    // Start confetti burst
    myConfetti({
        particleCount: 300,
        angle: 90,
        spread: 90,
        origin: { x: 0.5, y: 0 }
    });

    setTimeout(() => {
        myConfetti({
            particleCount: 300,
            angle: 90,
            spread: 90,
            origin: { x: 0.5, y: 0.8 }
        });
    }, 2000); // Confetti burst after 2 seconds
}

// Scroll animation for gallery
document.addEventListener('DOMContentLoaded', function() {
    const galleryRows = document.querySelectorAll('.gallery-section .row');
    
    function checkVisibility() {
        galleryRows.forEach(row => {
            const rect = row.getBoundingClientRect();
            const isVisible = (
                rect.top <= window.innerHeight * 0.75 && 
                rect.bottom >= window.innerHeight * 0.25
            );
            
            if (isVisible) {
                row.classList.add('visible');
            } else {
                // Optional: Remove this line if you want items to stay visible once shown
                row.classList.remove('visible');
            }
        });
    }
    
    // Initial check
    checkVisibility();
    
    // Check on scroll and resize
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
});
// Start the confetti animation when the page loads
window.onload = function() {
    startConfetti();
};

document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.classList.add('heart-cursor');
    cursor.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="#fb799d" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  
    // Change color on hover for clickable elements
    const clickables = document.querySelectorAll('a, button, .nav-link');
    clickables.forEach(item => {
      item.addEventListener('mouseenter', () => {
        cursor.querySelector('path').setAttribute('fill', '#ff6b8b');
        cursor.style.animation = 'heartbeat 0.8s infinite';
      });
      item.addEventListener('mouseleave', () => {
        cursor.querySelector('path').setAttribute('fill', '#fb799d');
        cursor.style.animation = 'heartbeat 1.5s infinite';
      });
    });
  });
  
  // Initialize Howler.js sound
var sound = new Howl({
    src: ["lover.mp3"], 
    autoplay: true,
    loop: true,
    volume: 0.5
  });
  
  // Play the sound
  sound.play();
  
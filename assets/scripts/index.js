
// get the mouse 
var mouse = {x: 0, y: 0};
// get the image element 
document.addEventListener('mousemove', function(e) {
    let element = document.querySelector('.about-image-container');
    if (!element) return;

    // Get the center of the image element
    // let rect = element.getBoundingClientRect();
    // let elementCenterX = rect.left + rect.width / 2;
    // let elementCenterY = rect.top + rect.height / 2;

    // // Calculate the angle based on mouse position relative to the center of the image
    // let dx = e.clientX - elementCenterX;
    // let dy = e.clientY - elementCenterY;
    // let angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert radians to degrees

    // // Apply the transformation
    // element.style.transform = `rotate(${angle}deg)`;
    // element.style.transition = 'transform 0.1s ease-out'; // Smooth transition
});
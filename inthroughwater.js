document.addEventListener('DOMContentLoaded', () => {
    // Project image array
    const images = [
        'img/project/inthroughwater/inthrough_5.jpg',   
        'img/project/inthroughwater/inthrough_6.jpg',
        'img/project/inthroughwater/inthrough_7.jpg',
        'img/project/inthroughwater/inthrough_8.jpg',
    ];

    const uniqueImages = [...new Set(images)]; // Ensure all images are unique

    // Make sure to define the container
    const container = document.querySelector('.project-img');

    if (container) {
        uniqueImages.forEach(src => {
            const imageContainer = document.createElement('div');

            const img = document.createElement('img');
            imageContainer.appendChild(img); 
            img.src = src;
            container.appendChild(imageContainer); 
        });
    } else {
        console.error("No .project-img element found on this page.");
    }
      
    const logos = [
        { src: 'img/logo1.png', alt: 'Logo 1' },
        { src: 'img/logo2.png', alt: 'Logo 2' },
        { src: 'img/logo3.png', alt: 'Logo 3' }
    ];

    const logoContainer = document.querySelector('.logofunding');

    if (logoContainer) {
        logos.forEach(logo => {
            const img = document.createElement('img');
            img.src = logo.src;
            img.alt = logo.alt;
            img.classList.add('funder-logo');
            logoContainer.appendChild(img);
        });
    } else {
        console.error("No .logofunding element found on this page.");
    }
});

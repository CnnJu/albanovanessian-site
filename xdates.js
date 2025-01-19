document.addEventListener('DOMContentLoaded', () => {
    // Project image array
    const images = [
        'img/project/rosasvartstation/rosasvart2.JPG',
        'img/project/rosasvartstation/rosasvart3.jpg',
        'img/project/rosasvartstation/rosasvart4.jpg',
        'img/project/rosasvartstation/rosasvart5.jpg'
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
        { src: 'img/logosfunding/norrdans_logo.png', alt: 'Logo 1' },
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

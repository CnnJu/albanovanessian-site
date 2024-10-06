document.addEventListener('DOMContentLoaded', () => {
    // Project image array
    const images = [
        'img/project/queerhub/1imgarray.jpg',
        'img/project/queerhub/2imgarray.jpg',
        'img/project/queerhub/3imgarray.jpg',
        'img/project/queerhub/4imgarray.jpg',
        'img/project/queerhub/5imgarray.jpg',
        'img/project/queerhub/6imgarray.jpg',
        'img/project/queerhub/7imgarray.jpg',
        'img/project/queerhub/8imgarray.jpg'
    ];

    const uniqueImages = [...new Set(images)]; // Ensure all images are unique

    // Make sure to define the container
    const container = document.querySelector('.project-img');

    if (container) {
        uniqueImages.forEach(src => {
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('vignette-effect'); // Add vignette class to wrapper

            const img = document.createElement('img');
            img.src = src;

            imgWrapper.appendChild(img); 
            container.appendChild(imgWrapper); 
        });
    } else {
        console.log("No .project-img element found on this page.");
    }
      
    const logoContainer = document.querySelector('.logofunding');
    if (logoContainer) {
        logos.forEach(logo => {
            const img = document.createElement('img');
            img.src = logo;
            img.alt = 'Funder Logo';
            img.classList.add('funder-logo');
            logoContainer.appendChild(img);
        });
    } else {
        console.log("No .logofunding element found on this page.");
    }
});

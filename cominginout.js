document.addEventListener('DOMContentLoaded', () => {
    // Project image array
    const images = [
        'img/project/comingout/1imgarray.webp',
        'img/project/comingout/2imgarray.webp',
        'img/project/comingout/3imgarray.webp',
        'img/project/comingout/4imgarray.webp',
        'img/project/comingout/5imgarray.webp',
        'img/project/comingout/6imgarray.webp',
        'img/project/comingout/7imgarray.webp',
        'img/project/comingout/9imgarray.webp',
        'img/project/comingout/10imgarray.webp',
        'img/project/comingout/11imgarray.webp',
    ];

    const uniqueImages = [...new Set(images)]; // Ensure all images are unique

    // Make sure to define the container
    const container = document.querySelector('.project-img');

    if (container) {
        uniqueImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            container.appendChild(img);
        });
    } else {
        console.log("No .project-img element found on this page.");
    }
    // Split images into two arrays each with four images
    const firstSixImages = uniqueImages.slice(0, 6);
    const lastTwoImages = uniqueImages.slice(6, 8);

    // Create containers for the two sets of images
    const firstContainer = document.querySelector('.first-six-images');
    const secondContainer = document.querySelector('.last-two-images');

    if (firstContainer) {
        firstSixImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            firstContainer.appendChild(img);
        });
    } else {
        console.log("No .first-six-images element found on this page.");
    }

    if (secondContainer) {
        lastTwoImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            secondContainer.appendChild(img);
        });
    } else {
        console.log("No .last-two-images element found on this page.");
    }
    // Logos array for funding organizations
    const logos = [
        'img/logosfunding/parts.webp',
        'img/logosfunding/GXII Festival.webp',
        'img/logosfunding/pinkscreens.webp'
    ];
      
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

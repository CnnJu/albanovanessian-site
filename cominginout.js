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
        'img/project/comingout/8imgarray.webp',
        'img/project/comingout/9imgarray.webp',
        'img/project/comingout/10imgarray.webp',
        'img/project/comingout/11imgarray.webp',
        'img/project/comingout/12imgarray.png'
    ];

    const uniqueImages = [...new Set(images)]; // Ensure all images are unique

    // Make sure to define the container
    const container = document.querySelector('.project-img');

    if (container) {
        uniqueImages.forEach(src => {
            const imgWrapper = document.createElement('div');

            const img = document.createElement('img');
            img.src = src;

            imgWrapper.appendChild(img); 
            container.appendChild(imgWrapper); 
        });
    } else {
        console.log("No .project-img element found on this page.");
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

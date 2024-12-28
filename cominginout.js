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
            const img = document.createElement('img');
            img.src = src;
            container.appendChild(img);
        });
    } else {
        console.log("No .project-img element found on this page.");
    }

    // news image array
    const entries = [
        {
            src: 'img/project/breakintwo/IMG_7834_2_PNG.webp',
            h1: 'Title 1',
            h2: 'Subtitle 1',
            h3: '',
            h4: '',
            h5: 'Additional Info 1'
        },
        {
            src: 'img/project/breakintwo/IMG_7827_PNG.webp',
            h1: 'Title 2',
            h2: '',
            h3: 'Subtitle 2',
            h4: '',
            h5: ''
        },
        // Add other entries as needed
    ];

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

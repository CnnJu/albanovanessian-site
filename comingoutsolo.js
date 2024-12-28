document.addEventListener('DOMContentLoaded', () => {
    // Project image array
    const images = [
        'img/project/comingoutsolo/imgarray1.webp',
        'img/project/comingoutsolo/imgarray2.webp',
        'img/project/comingoutsolo/imgarray3.webp',
        'img/project/comingoutsolo/imgarray4.webp',
        'img/project/comingoutsolo/imgarray5.webp',
        'img/project/comingoutsolo/imgarray6.webp'
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
        'img/logosfunding/pianofabriek.webp',
        'img/logosfunding/kunstenwerkplaats.webp'
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

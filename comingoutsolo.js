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

    const logos = [
        'img/logosfunding/parts.webp',
        'img/logosfunding/GXII Festival.webp',
        'img/logosfunding/pianofabriek.webp',
        'img/logosfunding/kunstenwerkplaats.webp'
      ];
      
      const logoContainer = document.querySelector('.logofunding');
      logos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        img.alt = 'Funder Logo';
        img.classList.add('funder-logo');
        logoContainer.appendChild(img);
      });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Project image array
    const images = [
        'img/project/breakintwo/IMG_7834_2_PNG.webp',
        'img/project/breakintwo/IMG_7827_PNG.webp',
        'img/project/breakintwo/IMG_1538_JPG.webp',
        'img/project/breakintwo/ec5757_fd4036ec2a1d419c9b7cbbfac6c11b7d~mv2.webp',
        'img/project/breakintwo/ec5757_f947e045ff0447f79d74a310a0e8ae09~mv2.webp',
        'img/project/breakintwo/ec5757_7c92885bb0b04ba09217438848749872~mv2.webp'
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
    const images = [
        'img/project/breakintwo/IMG_7834_2_PNG.webp',
        'img/project/breakintwo/IMG_7827_PNG.webp',
        'img/project/breakintwo/IMG_1538_JPG.webp',
        'img/project/breakintwo/ec5757_fd4036ec2a1d419c9b7cbbfac6c11b7d~mv2.webp',
        'img/project/breakintwo/ec5757_f947e045ff0447f79d74a310a0e8ae09~mv2.webp',
        'img/project/breakintwo/ec5757_7c92885bb0b04ba09217438848749872~mv2.webp'
    ];

    const container = document.querySelector('.about-news');

    if (container) {
        images.forEach((src, index) => {
            const div = document.createElement('div');
            div.classList.add('img-wrapper');

            // Create image element
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('mosaic-img');
            div.appendChild(img);

            // Create overlayed titles
            const h1 = document.createElement('h1');
            h1.textContent = `Project ${index + 1}`;
            div.appendChild(h1);

            container.appendChild(div);
        });
    } else {
        console.log("No '.about-news' container found.");
    }
});

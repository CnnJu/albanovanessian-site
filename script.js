document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });

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

    const container = document.querySelector('.project-img');

    if (container) {
        uniqueImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            container.appendChild(img);
        });
    } else {
        console.error("Container element with class 'project-img' not found.");
    }
});

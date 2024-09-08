document.addEventListener('DOMContentLoaded', () => {
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

});

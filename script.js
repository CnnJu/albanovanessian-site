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

    const container = document.querySelector('.about-news');

    if (container) {
        entries.forEach(entry => {
            const div = document.createElement('div');
            div.classList.add('img-wrapper');

            // Create image element
            const img = document.createElement('img');
            img.src = entry.src;
            img.classList.add('mosaic-img');
            div.appendChild(img);

            // Create and append headings based on the entry data
            if (entry.h1) {
                const h1 = document.createElement('h1');
                h1.textContent = entry.h1;
                div.appendChild(h1);
            }
            if (entry.h2) {
                const h2 = document.createElement('h2');
                h2.textContent = entry.h2;
                div.appendChild(h2);
            }
            if (entry.h3) {
                const h3 = document.createElement('h3');
                h3.textContent = entry.h3;
                div.appendChild(h3);
            }
            if (entry.h4) {
                const h4 = document.createElement('h4');
                h4.textContent = entry.h4;
                div.appendChild(h4);
            }
            if (entry.h5) {
                const h5 = document.createElement('h5');
                h5.textContent = entry.h5;
                div.appendChild(h5);
            }

            container.appendChild(div);
        });
    } else {
        console.log("No '.about-news' container found.");
    }
});

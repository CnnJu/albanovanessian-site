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
            src: '#',
            h1: 'Du 09 Février au 09 Mars',
            h2: 'Résidence d\'écriture',
            h3: 'Villa Empain/Fondation Boghossian ',
            h4: 'Bruxelles, Belgique',
            h5: 'Additional Info 1'
        },
        {
            src: '#',
            h1: '17 - 18 - 19 Avril',
            h2: 'Performances',
            h3: 'Théâtre de la Balsamine - Tickets',
            h4: 'Bruxelles, Belgique',
            h5: '#'
        },
        // Add other entries as needed
    ];
});
const newsContainer = document.querySelector('.news-container');

if (newsContainer) {
    entries.forEach(entry => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const img = document.createElement('img');
        img.src = entry.src;
        newsItem.appendChild(img);

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const h1 = document.createElement('h1');
        h1.textContent = entry.h1;
        overlay.appendChild(h1);

        const h2 = document.createElement('h2');
        h2.textContent = entry.h2;
        overlay.appendChild(h2);

        const h3 = document.createElement('h3');
        h3.textContent = entry.h3;
        overlay.appendChild(h3);

        const h4 = document.createElement('h4');
        h4.textContent = entry.h4;
        overlay.appendChild(h4);

        const h5 = document.createElement('h5');
        h5.textContent = entry.h5;
        overlay.appendChild(h5);

        newsItem.appendChild(overlay);
        newsContainer.appendChild(newsItem);
    });
} else {
    console.log("No .news-container element found on this page.");
}

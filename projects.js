const projects = [
  {
    link: "queerhub.html",
    title: "Queerhub",
    year: "2022",
    image: "img/project/projects/queerhub_square_500X500.jpg",
    description: "En Lire Plus",
    height: 500,
    width: 500,
  },
  {
    link: "break-in-two.html",
    title: "break.in.two",
    year: "2019",
    image: "img/project/projects/breakintwo_square_500X500.jpg",
    description: "En Lire Plus",
    height: 500,
    width: 500,
  },
  {
    link: "comingoutsolo.html",
    title: "COMING in out (solo)",
    year: "2019",
    image: "img/project/projects/breakintwo_square_500X500.jpg",
    description: "En Lire Plus",
    height: 500,
    width: 500,
  },
  {
    link: "comingoutsolo.html",
    title: "COMING in out (vidéo installation)",
    year: "2019",
    image: "img/project/projects/comingoutvideo_square_500X500.jpg",
    description: "En Lire Plus",
    height: 500,
    width: 500,
  },
  {
    link: "rosasvartstation.html",
    title: "ROSA.SVART.STATION",
    year: "2020",
    image: "img/project/projects/rosasvart_square_500X500.jpg",
    description: "En Lire Plus",
    height: 500,
    width: 500,
  },
  {
    link: "inthroughwater.html",
    title: "in.through.WATER",
    year: "2022",
    video: "https://www.youtube.com/embed/HxSUWAqFGuI?si=Msy_7Q46oWm64jsO",
    description: "En Lire Plus",
    height: 500,
    width: 500,
  },
  {
    link: "griefhub.html",
    title: "GriefHub",
    year: "2020",
    image: "img/project/projects/GriefHub_square_500X500.jpg",
    description: "En Lire Plus",
    height: 500,
    width: 500,
  },
];

const projectsGrid = document.getElementById("projects-grid");

projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  projectDiv.classList.add("box");
  projectDiv.classList.add("square");

  const projectContent = `
      <a href="${project.link}" class="project-link">
        <div class="image-container">
          ${
            project.image
              ? `<img src="${project.image}" alt="${project.title}" class="project-image">`
              : `<iframe width="${project.width}" height="${project.height}" src="${project.video}" title="${project.title}" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          }
        </div>
        <div class="project-img-overlay">
          <h1 class="projects-page-title">${project.title}</h1>
          <h5>${project.year}</h5>
          <h5 class="read-more">${project.description}</h5>
        </div>
      </a>
    `;

  projectDiv.innerHTML = projectContent;
  projectsGrid.appendChild(projectDiv);
});

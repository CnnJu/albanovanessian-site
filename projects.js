const projects = [
  {
    link: "queerhub.html",
    title: "Queerhub",
    year: "2022",
    image: "img/project/queerhub/2imgarray.jpg",
    description: "En Lire Plus",
    height: 315,
    width: 560,
  },
  {
    link: "break-in-two.html",
    title: "break.in.two",
    year: "2019",
    image:
      "img/project/breakintwo/ec5757_0ef46567457a4cdda646b6636a05430d~mv2 (1).webp",
    description: "En Lire Plus",
    height: 315,
    width: 560,
  },
  {
    link: "comingoutsolo.html",
    title: "COMING in out (solo)",
    year: "2019",
    image: "img/project/comingoutsolo/thirdimgwide.webp",
    description: "En Lire Plus",
    height: 315,
    width: 560,
  },
  {
    link: "comingoutsolo.html",
    title: "COMING in out (vidéo installation)",
    year: "2019",
    image: "img/project/comingout/1img.webp",
    description: "En Lire Plus",
    height: 315,
    width: 560,
  },
  {
    link: "rosasvartstation.html",
    title: "ROSA.SVART.STATION",
    year: "2020",
    image: "img/project/rosasvartstation/rosasvart1.JPG",
    description: "En Lire Plus",
    height: 315,
    width: 560,
  },
  {
    link: "inthroughwater.html",
    title: "in.through.WATER",
    year: "2022",
    video: "https://www.youtube.com/embed/HxSUWAqFGuI?si=Msy_7Q46oWm64jsO",
    description: "En Lire Plus",
    height: 315,
    width: 560,
  },
  {
    link: "griefhub.html",
    title: "GriefHub",
    year: "2020",
    image: "img/project/griefhub/GriefHub-logo.png",
    description: "En Lire Plus",
    height: 315,
    width: 560,
  },
];

const projectsGrid = document.getElementById("projects-grid");

projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

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

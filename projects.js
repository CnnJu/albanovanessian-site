const projects = [
  {
    link: "queerhub.html",
    title: "Queerhub",
    year: "2022",
    image: "img/project/940px_queerhub.png",
    description: "En Lire Plus",
    fontClass: "queerhub-font"
  },
  {
    link: "inthroughwater.html",
    title: "in.through.WATER",
    year: "2022",
    image: "img/project/470px_inthroughwater.gif",
    description: "En Lire Plus",
    fontClass: "inthroughwater-font"
  },
  {
    link: "inthroughwater.html",
    title: "in.through.WATER",
    year: "2022",
    image: "img/project/470px_inthroughwater.gif",
    description: "En Lire Plus",
    fontClass: "inthroughwater-font"
  },
  {
    link: "xdates.html",
    title: "x.dates",
    year: "2022",
    image: "img/project/470px_xdates.png",
    description: "En Lire Plus",
    fontClass: "xdates-font"
  },
  {
    link: "rosasvartstation.html",
    title: "ROSA.SVART.STATION",
    year: "2021",
    image: "img/project/1410px_rosasvartstation.png",
    description: "En Lire Plus",
    fontClass: "rosasvartstation-font"
  },
  {
    link: "cominginoutsolo.html",
    title: "COMING in out (solo)",
    year: "2019",
    image: "img/project/940px_cominginoutsolo.png",
    description: "En Lire Plus",
    fontClass: "cominginoutsolo-font"
  },
  {
    link: "comingoutvideo.html",
    title: "COMING in out (vidéo installation)",
    year: "2019",
    image: "img/project/470px_comingoutvideo.png",
    description: "En Lire Plus",
    fontClass: "comingoutvideo-font"
  },
  {
    link: "breakintwo.html",
    title: "break.in.two",
    year: "2019",
    image: "img/project/470px_breakintwo.png",
    description: "En Lire Plus",
    fontClass: "breakintwo-font"
  }
];

const projectsGrid = document.getElementById("projects-grid");

projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  const projectContent = `
      <a href="${project.link}" class="project-link">
        <div class="image-container">
          <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <div class="project-img-overlay">
          <h1 class="projects-page-title ${project.fontClass}">${project.title}</h1>
          <h5 class="year">${project.year}</h5>
          <h5 class="read-more">${project.description}</h5>
        </div>
      </a>
    `;

  projectDiv.innerHTML = projectContent;
  projectsGrid.appendChild(projectDiv);
});
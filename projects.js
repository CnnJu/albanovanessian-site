const projects = [
  {
    link: "queerhub.html",
    title: "Queerhub",
    year: "2022",
    image: "img/project/projects/queerhub",
    description: "En Lire Plus",
  },
  {
    link: "break-in-two.html",
    title: "break.in.two",
    year: "2019",
    image: "img/project/projects/breakintwo",
    description: "En Lire Plus",
  },
  {
    link: "comingoutsolo.html",
    title: "COMING in out (solo)",
    year: "2019",
    image: "img/project/projects/comingoutsolo",
    description: "En Lire Plus",
  },
  {
    link: "comingoutsolo.html",
    title: "COMING in out (vidéo installation)",
    year: "2019",
    image: "img/project/projects/comingoutvideo",
    description: "En Lire Plus",
  },
  {
    link: "rosasvartstation.html",
    title: "ROSA.SVART.STATION",
    year: "2020",
    image: "img/project/projects/rosasvart",
    description: "En Lire Plus",
  },
  {
    link: "inthroughwater.html",
    title: "in.through.WATER",
    year: "2022",
    image: "img/project/projects/inthrough",
    video: "https://www.youtube.com/embed/HxSUWAqFGuI?si=Msy_7Q46oWm64jsO",
    description: "En Lire Plus",
  },
  {
    link: "griefhub.html",
    title: "GriefHub",
    year: "2020",
    image: "img/project/projects/GriefHub",
    description: "En Lire Plus",
  },
];

const projectsGrid = document.getElementById("projects-grid");

const getRandomNumber = () => {
  return Math.floor(Math.random() * 3) + 1;
};

projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  projectDiv.classList.add("box");

  let height;
  let width;
  let img;

  const number = getRandomNumber();
  if (number === 1) {
    height = 500;
    width = 500;
    img = project.image + "_square_500x500.jpg";
    projectDiv.classList.add("square");
  } else if (number === 2) {
    height = 1000;
    width = 500;
    img = project.image + "_tall_500x1000.jpg";
    projectDiv.classList.add("tall");
  } else {
    height = 500;
    width = 1000;
    img = project.image + "_wide_1000x500.jpg";
    projectDiv.classList.add("wide");
  }

  const projectContent = `
      <a href="${project.link}" class="project-link">
        <div class="image-container">
          ${`<img src="${img}" alt="${project.title}" class="project-image">`}
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

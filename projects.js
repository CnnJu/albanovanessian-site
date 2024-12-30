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
    link: "cominginout.html",
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
    height = 250;
    width = 250;
    img = project.image + "_square_500x500.jpg";
    projectDiv.classList.add("square");
  } else if (number === 2) {
    height = 500;
    width = 250;
    img = project.image + "_tall_500x1000.jpg";
    projectDiv.classList.add("tall");
  } else {
    height = 250;
    width = 500;
    img = project.image + "_wide_1000x500.jpg";
    projectDiv.classList.add("wide");
  }

  const projectContent = `
      <a href="${project.link}" class="project-link">
        <div class="image-container" style="width: ${width}px; height: ${height}px;">
          ${`<img src="${img}" alt="${project.title}" class="project-image" style="width: 100%; height: 100%;">`}
        </div>
        <div class="project-img-overlay">
          <h1 class="projects-page-title">${project.title}</h1>
          <h5 class="year">${project.year}</h5>
          <h5 class="read-more">${project.description}</h5>
        </div>
      </a>
    `;

  projectDiv.innerHTML = projectContent;
  projectsGrid.appendChild(projectDiv);
});

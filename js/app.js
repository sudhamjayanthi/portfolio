const writingText = document.getElementById("writing-text");
const work = document.getElementById("work");

const newProject = (name, img, tag, desc, url) => `<div class="row work-row">
  <div class="small-12 medium-6 columns">
    <img src="${img}" alt="project image">
  </div>
  <div class="small-12 medium-5 medium-offset-1 columns">
    <div class="details details-ftm">
      <h3>${name}</h3>
      
      <p class="platform">${tag}</p>
      <p>${desc}</p>
      <a class="my-button" rel="noopener" target="_blank" href="${url}">LIVE DEMO</a>
    </div>
  </div>
  </div>`;

const renderProjects = (projects) => {
  projects.forEach((p) => {
    work.innerHTML += newProject(p.name, p.img, p.tag, p.desc, p.link);
  });
  work.innerHTML +=
    '<p class="text-center"><em>Check out the source code of these projects on <a href="https://github.com/sudhamjayanthi" data-splitbee-event="Social Link" data-splitbee-event-type="github-after-work">my github</a></em></p> ';
};

const typeAnimation = () => {
  Typed.new("#writing-text", {
    strings: [
      "love to solve problems.",
      "turn ideas into reality.",
      "build awesome things for web.",
    ],
    typeSpeed: 1,
    contentType: "text",
    callback: function () {
      writingText.style.color = "rgb(71, 71, 71)";
      writingText.style.background = "rgb(187, 230, 255)";
    },
    preStringTyped: function () {},
    onStringTyped: function () {},
  });
};

typeAnimation();
renderProjects(PROJDATA);

console.log("appreciate your curiousity, there's nothing much here though ;)");

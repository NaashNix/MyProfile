const cardContainer = $("#cardContainer");

function skillViewComponent(skill) {
  console.log("Skill called");

  var ratingCreated = "";

  console.log(typeof skill.rating);

  for (var i = 0; i < skill.rating; i++) {
    console.log("i"+i);
    ratingCreated = ratingCreated + `<div class="ratingCircles rated"></div>`;
  }

  for (var j = skill.rating; 5 > j; j++) {
    console.log("j" + j);
    ratingCreated = ratingCreated + `<div class="ratingCircles"></div>`;
  }

  return `<div class="cardParent">
                   <div style="display: flex; flex-direction: row;  align-items: center;">
                    <div style="width: 100px;">
                        <img class="cardImage" src="${skill.imageUrl}" alt="">
                    </div>
                    <div>
                        <span class="cardMainTitle">${skill.title}</span>
                        <span class="cardProjectTitle">${skill.projects}+ PROJECTS</span>
                        <div class="ratingParent">
                            ${ratingCreated}
                        </div>
                    </div>
                   </div>
                    <p>${skill.description}</p>
                </div>`;
}

const skills = [
  {
    title: "HTML5",
    projects: 6,
    rating: 2,
    imageUrl: "./assets/images/HTML5 .png",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   ",
  },
  {
    title: "HTML5",
    projects: 6,
    rating: 5,
    imageUrl: "./assets/images/HTML5 .png",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   ",
  },
  {
    title: "HTML5",
    projects: 6,
    rating: 5,
    imageUrl: "./assets/images/HTML5 .png",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   ",
  },
  {
    title: "HTML5",
    projects: 6,
    rating: 5,
    imageUrl: "./assets/images/HTML5 .png",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   ",
  },
];

skills.forEach((skill) => {
  cardContainer.append(skillViewComponent(skill));
});

const cardContainer = $("#cardContainer");


function skillViewComponent(skill) {
  console.log("Skill called");

  return (
    <div class="cardParent">

    </div>
  );

}

const skills = [
  {
    title: "HTML",
    projects: 6,
    rating: 5,
    imageUrl: "",
    description:
      "I’ve done more than 5 projects using HTML language. This experience in HTML leads me to the easy tool for programming and web developing.   "
  }
];

skillViewComponent(skills[0]);

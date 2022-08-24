const projectItemsContainer = $("#projectItemsContainer");
const typeAll = $("#typeAll");
const typeWeb = $("#typeWeb");
const typeMobileApps = $("#typeMobileApps");
const typeStandalone = $("#typeStandalone");

var selectedType = "all";
const projects = [
  {
    title: "Money Converter",
    github: "naashnix.github.com/MyProfile",
    type: "web",
    icon: "./assets/images/SampleProjectUI.png",
  },
  {
    title: "Money Converter",
    github: "naashnix.github.com/MyProfile",
    type: "web",
    icon: "./assets/images/SampleProjectUI.png",
  },
  {
    title: "Money Converter",
    github: "naashnix.github.com/MyProfile",
    type: "standalone",
    icon: "./assets/images/SampleProjectUI.png",
  },
  {
    title: "Money Converter",
    github: "naashnix.github.com/MyProfile",
    type: "mobileApps",
    icon: "./assets/images/SampleProjectUI.png",
  }
];

const typeAllClicked = () => {
  typeAll.removeClass("active");
  typeWeb.removeClass("active");
  typeMobileApps.removeClass("active");
  typeStandalone.removeClass("active");
  typeAll.addClass("active");
  changeProjects('all');
};

function typeWebClicked(){
  console.log("web clicked");
  typeAll.removeClass("active");
  typeWeb.removeClass("active");
  typeMobileApps.removeClass("active");
  typeStandalone.removeClass("active");
  typeWeb.addClass("active");
  changeProjects('web');
};

const typeMobileAppsClicked = () => {
  typeAll.removeClass("active");
  typeWeb.removeClass("active");
  typeMobileApps.removeClass("active");
  typeStandalone.removeClass("active");
  typeMobileApps.addClass("active");
  changeProjects('mobileApps');
};

const typeStandaloneClicked = () => {
  typeAll.removeClass("active");
  typeWeb.removeClass("active");
  typeMobileApps.removeClass("active");
  typeStandalone.removeClass("active");
  typeStandalone.addClass("active");
  changeProjects('standalone');
};

function changeProjects(type) {
  projectItemsContainer.html("");

  if (type === 'all'){
    projects.forEach(item => {
      projectItemsContainer.append(createItem(item));
    });
  }else{
    projects.forEach((item) => {
      if (item.type === type) {
        projectItemsContainer.append(createItem(item));
      }
    });
  }

  
}

function createItem(itemDetails) {
  return `<div class="projectItem">
            <div class="iconsParent">
                <img src="${itemDetails.icon}" alt="">
            </div>
            <div class="description">
                <p>${itemDetails.title}</p>
                <a href="${itemDetails.github}" ><img src="./assets/images/github.png" alt=""></a>
            </div>
            </div>`;
}

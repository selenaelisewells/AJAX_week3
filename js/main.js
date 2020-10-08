// import your packages here
import Team from "./modules/DataModule.js";


(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');

    console.log(Team);

    debugger;

    //select our user elements and load the content
    let userSection = document.querySelector(".user-section").children;

    userSection[1].textContent = Team["Pan"].name;
    userSection[2].textContent = Team["Pan"].role;
    userSection[3].textContent = Team["Pan"].nickname;

})();
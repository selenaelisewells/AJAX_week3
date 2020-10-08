// import your packages here
import Team from "./modules/DataModule.js";


(() => {
    // stub * just a place for non-component-specific stuff
    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;


    debugger;

    //select our user elements and load the content

    function handleDataSet(data) {


        for (let user in data) {

            //make a copy of our template here
            // the populate the children (text elements ) with
            // the static data from the team object
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;
            currentUserText[1].textContent = Team[user].name;
            currentUserText[2].textContent = Team[user].role;
            currentUserText[3].textContent = Team[user].nickname;

            userSection.appendChild(currentUser);

        }
    }


    handleDataSet(Team);

    // userSection[1].textContent = Team["Pan"].name;
    // userSection[2].textContent = Team["Pan"].role;
    // userSection[3].textContent = Team["Pan"].nickname;

})();
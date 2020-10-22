// import your packages here
import Team from "./modules/DataModule.js";


(() => {
    //start with a fetch call
    fetch('./DataSet.json')
        .then(res => res.json()) //parse the json (translate the json into javascript)
        .then(data => {
            //this is out data(dataset.json)
            //converted to plain javascript object
            handleDataSet(data);
        })

    .catch((error) => console.log(error));



    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;




    //select our user elements and load the content

    function handleDataSet(data) {


        for (let user in data) {
            debugger;

            //make a copy of our template here
            // the populate the children (text elements ) with
            // the static data from the team object
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;
            currentUserText[1].src = `images/${data[user].avatar}`;
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].role;
            currentUserText[4].textContent = data[user].nickname;

            userSection.appendChild(currentUser);

        }
    }


    handleDataSet(Team);

    // userSection[1].textContent = Team["Pan"].name;
    // userSection[2].textContent = Team["Pan"].role;
    // userSection[3].textContent = Team["Pan"].nickname;

})();
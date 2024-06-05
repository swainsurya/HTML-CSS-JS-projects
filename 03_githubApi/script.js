let searchedTxt = document.querySelector(".searchInput");
let searchBtn = document.querySelector(".searchBtn");
let container = document.querySelector(".container");
let setImg = document.querySelector(".image");
let setName = document.querySelector(".name");
let setUsername = document.querySelector(".username");
let setAbout = document.querySelector(".about");
let setFollowers = document.querySelector(".followers");
let setFollowing = document.querySelector(".following");
let setRepos = document.querySelector(".repos");
let gitbox = document.querySelector(".gitBox");
let element1 = document.createElement("div");
let checkbtn = document.querySelector(".checkBtn");
let githubUrl = "" ;

searchBtn.addEventListener("click", async (e) => {
    let data = await fetch(`https://api.github.com/users/${searchedTxt.value}`);
    let respone = await data.json();
    // container.removeChild(element1);
    if (respone.message === "Not Found") {
        element1.setAttribute("class", "notfound");
        gitbox.classList.add("hide");
        element1.innerHTML = `<h3>Not Found</h3>`
        container.appendChild(element1);
    }
    else {
        element1.classList.add("hide");
        gitbox.classList.remove("hide");
        setImg.src = `${respone.avatar_url}`;
        setName.textContent = respone.name;
        setUsername.textContent = respone.login;
        setAbout.textContent = respone.bio;
        setFollowers.textContent = respone.followers;
        setFollowing.textContent = respone.following;
        setRepos.textContent = respone.public_repos;
        githubUrl = respone.html_url;
    }
})

checkbtn.addEventListener("click",e=>{
    window.location.href = `${githubUrl}`;
})
const overview = document.querySelector(".overview");
// where the profile information will appear
const username = "asamcclellan";
// github username
const repoList = document.querySelector(".repo-list");
// list where repos display

const getUserData = async function () {
    const res = await fetch (`https://api.github.com/users/${username}`);
    // surround the template in backticks since we're using a template literal
    const data = await res.json();
    displayUserInfo(data);
    fetchRepos();
}
// API call for user data

getUserData();

const displayUserInfo = function (data) {
    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    userInfo.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
    `;
    overview.append(userInfo);
}
// create div with class user-info and building profile info

const fetchRepos = async function () {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=last&perpage=100`);
    const data = await res.json();
    displayRepoInfo(data);
}

const displayRepoInfo = function (repos) {
    for (let repo of repos) {
        const li = document.createElement("li");
        li.classList.add("repo");
        li.innerHTML = `<h3>${repo.name}</h3>`;
        repoList.append(li);
    }
}
const overview = document.querySelector(".overview");
// where the profile information will appear
const username = "asamcclellan";
// github username

const getUserData = async function () {
    const res = await fetch (`https://api.github.com/users/${username}`);
    // surround the template in backticks since we're using a template literal
    const data = await res.json();
    displayUserInfo(data);
}

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
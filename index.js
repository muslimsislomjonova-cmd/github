const input = document.querySelector("#username");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");


const TOKEN = "ghp_YOURTOKENHERE";


btn.addEventListener("click", () => {

    const username = input.value;
fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("user toplmadi");
      }
      return res.json();
    })
 .then(function (data) {
  result.innerHTML =
    '<img src="' + data.avatar_url + '" width="120">' +
    '<h2>' + (data.name ? data.name : 'No name') + '</h2>' +
    '<p>@' + data.login + '</p>' +
    '<p>Followers: ' + data.followers + '</p>' +
    '<p>Repos: ' + data.public_repos + '</p>' +
    '<a href="' + data.html_url + '" target="_blank">GitHub profile</a>';
})  

  .catch(err => {
      result.innerHTML = "bunday foydalanuvchi yoq";
    });
});

   

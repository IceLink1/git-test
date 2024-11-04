const btn = document.querySelector(".btn");
const list = document.querySelector(".list");


btn.addEventListener("click", () => {
    let elemLi = document.createElement("li");
    elemLi.innerHTML = "You can change the name that is associated with your Git commits using the git config command. The new name you set will be visible in any future commits you push to GitHub from the command line. If you'd like to keep your real name private, you can use any text as your Git username.";

    list.appendChild(elemLi);
})
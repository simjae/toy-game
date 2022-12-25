class Game {
    constructor(name) {
        this.name = name;
        
    }
    init() { 
        let userList = document.querySelector(".user-list");
        let span = document.createElement("span");
        span.innerHTML = this.name;
        userList.appendChild(span);
        return `닉네임 ${this.name}`;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    let user = new Game("심재형").init();
    console.log(user);
    cardEventHandler();
});


const card = document.querySelectorAll(".card");
function cardEventHandler () {
    card.forEach(el => {
        el.addEventListener("click", cardClick);
    })
}
const cardClick = (ev) => {
    card.forEach(el => el.classList.remove("select"))
    ev.currentTarget.classList.add("select");
}
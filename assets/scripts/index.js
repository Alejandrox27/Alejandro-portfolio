function loaded(){
    const button = document.getElementById("showMore");
    const hideProyects = document.getElementsByClassName("hide");

    const list = document.getElementsByClassName("proyects-list")[0];

    button.addEventListener("click", showOr, false);

    if (window.innerWidth >= 700){
        list.setAttribute('style', 'grid-template-rows: repeat(3, 1fr);');
    }

    if (window.innerWidth >= 810){
        list.setAttribute('style', 'grid-template-rows: repeat(2, 1fr);');
    }

    if (window.innerWidth <= 700){
        button.classList.remove("d-none");
        for (let i = 0; i < 3; i++){
            hideProyects[i].classList.add("d-none")
        }
    } else {
        button.classList.add("d-none");
        for (let i = 0; i < 3; i++){
            hideProyects[i].classList.remove("d-none")
        }
    }
}

function showOr(e){
    const list = document.getElementsByClassName("proyects-list")[0];
    const hideProyects = document.getElementsByClassName("hide");

    if (e.target.textContent === "Show more"){
        list.setAttribute('style', 'grid-template-rows: repeat(6, 1fr);');
        for (let i = 0; i < 3; i++){
            hideProyects[i].classList.remove("d-none")
        }
        e.target.textContent = "Show less";

    } else if(e.target.textContent === "Show less"){
        list.setAttribute('style', 'grid-template-rows: repeat(3, 1fr);');
        for (let i = 0; i < 3; i++){
            hideProyects[i].classList.add("d-none")
        }
        e.target.textContent = "Show more";
    }
}

window.addEventListener("load", loaded, false);
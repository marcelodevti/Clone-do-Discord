const Login = document.querySelector("#login");
const overlay = document.querySelector("#overlay");

const openlogin = () => {
    console.log("open login");
    Login.classList.add("active");
    overlay.classList.add("overlayactive");
};

const closelogin = () =>{
    Login.classList.remove("active");
    overlay.classList.remove("overlayactive");
};
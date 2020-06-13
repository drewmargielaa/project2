$(document).ready(function(){
    let currUser = JSON.parse(localStorage.getItem("currUser"));
    console.log(currUser);
    if(currUser){
        $("#login-btn").remove();
        $("#nav").append(`<a> Welcome, ${currUser.firstName}</a>`);
    }
})
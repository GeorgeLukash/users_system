let modal;

let name;
let lastname;
let email;
let age;
let form;
let h1;

window.onload = function () {
    modal = document.getElementById('myModal');

    name = document.getElementById('name');
    lastname = document.getElementById('lastname');
    email = document.getElementById('email');
    age = document.getElementById('age');
    form = document.getElementById('myForm');    
    h1 = document.getElementById('modal_title');

}


let addUser = function () {
    modal.style.display = "block";
    
    h1.innerText = "Create user";
    form.action = "/users";
    name.value = "";
    lastname.value = "";
    email.value = "";
    age.value = "";
}
let editUser = function (user) {    
    modal.style.display = "block";
    h1.innerText = "Edit user";
    form.action = "/users/" + user.id;
    name.value = user.name;
    lastname.value = user.lastname;
    email.value = user.email;
    age.value = user.age;

}

let hideModal = function () {
    modal.style.display = "none";
}

let deleteUser = function (id) {
    window.location.replace("http://localhost:3000/users?delete=" + id);
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
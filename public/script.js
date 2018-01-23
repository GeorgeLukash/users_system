let modal;
let modal1;

let name;
let lastname;
let email;
let age;
let form;
let h1;
let id;

window.onload = function () {
    modal = document.getElementById('myModal');

    name = document.getElementById('name');
    lastname = document.getElementById('lastname');
    email = document.getElementById('email');
    age = document.getElementById('age');
    form = document.getElementById('myForm');
    h1 = document.getElementById('modal_title');
    id = document.getElementById('id');

}


let addUser = function () {
    modal.style.display = "block";
    h1.innerText = "Create user";
    changeVisibility("hidden", "text");
    form.action = "/users";
    id.value = "";
    name.value = "";
    lastname.value = "";
    email.value = "";
    age.value = "";
}
let editUser = function (user) {
    modal.style.display = "block";
    h1.innerText = "Edit user";
    changeVisibility("hidden", "text");
    form.action = "/users?_method=PUT";
    id.value = user.id;
    name.value = user.name;
    lastname.value = user.lastname;
    email.value = user.email;
    age.value = user.age;

}

let hideModal = function () {
    modal.style.display = "none";
}

let deleteUser = function (idd) {
    modal.style.display = "block";
    h1.innerText = "Delete User";
    changeVisibility("text", "hidden");
    id.value = idd;
    form.action = "/users/" + idd + "?_method=DELETE"
}

let changeVisibility = function (valueA, valueB) {
    id.type = valueA;
    name.type = valueB;
    lastname.type = valueB;
    email.type = valueB;
    age.type = valueB;
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
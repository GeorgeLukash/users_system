let modal = document.getElementById('myModal');

let id = document.getElementById('id');
let name = document.getElementById('name');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let age = document.getElementById('age');
let form = document.getElementById('myForm');
let h1 = document.getElementById('modal_title');

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
    form.action = "/users/edit";
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
    form.action = "/users/delete/" + idd;
}

let changeVisibility = function (valueA, valueB) {
    id.type = valueA;
    name.type = valueB;
    lastname.type = valueB;
    email.type = valueB;
    age.type = valueB;
}
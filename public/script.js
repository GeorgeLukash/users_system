let modal;

let name;
let lastname;
let email;
let age;
let form;
let h1;
let btn_add;
let btn_edit;

window.onload = function () {
    modal = document.getElementById('myModal');

    name = document.getElementById('name');
    lastname = document.getElementById('lastname');
    email = document.getElementById('email');
    age = document.getElementById('age');
    form = document.getElementById('myForm');
    h1 = document.getElementById('modal_title');
    btn_add = document.getElementById('btn-add');
    btn_edit = document.getElementById('btn-edit');
}

let showModal = function () {
    modal.style.display = "block";

    h1.innerText = "Create user";

    name.value = "";
    lastname.value = "";
    email.value = "";
    age.value = "";

    btn_add.style.display = "inline-block";
    btn_edit.style.display = "none";
};

let showEditModal = function (user) {
    modal.style.display = "block";
    h1.innerText = "Edit user";

    id.value = user.id
    name.value = user.name;
    lastname.value = user.lastname;
    email.value = user.email;
    age.value = user.age;

    btn_edit.style.display = "inline-block";
    btn_add.style.display = "none";
}


let addUser = function () {
    modal.style.display = "none";

    let xhr = new XMLHttpRequest();

    let body = 'name=' + name.value +
        '&lastname=' + lastname.value +
        '&email=' + email.value +
        '&age=' + age.value;
    
    xhr.open("POST", '/users', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    window.location.replace("http://localhost:3000/users");
    xhr.send(body);
}

let editUser = function () {
    let xhr = new XMLHttpRequest();

    let body = 'id=' + id.value +
        '&name=' + name.value +
        '&lastname=' + lastname.value +
        '&email=' + email.value +
        '&age=' + age.value;
    
    xhr.open("PUT", '/users', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    window.location.replace("http://localhost:3000/users");
    xhr.send(body);
}

let hideModal = function () {
    modal.style.display = "none";
}

let deleteUser = function (id) {
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/users/' + id, true);
    xhr.send();
    location.reload();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let modal = document.getElementById('myModal');

let name = document.getElementById('name');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let age = document.getElementById('age');
let form = document.getElementById('myForm');
let h1 = document.getElementById('modal_title');
let btn_add = document.getElementById('btn-add');
let btn_edit = document.getElementById('btn-edit');

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
    xhr.onload = function () {
        // var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log("Success");
            window.location.replace("http://localhost:3000/users");
        } else {
            console.error("fail");
        }
    };
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

    xhr.send(body);

    xhr.onload = function () {
        // var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log("Success");
            window.location.replace("http://localhost:3000/users");
        } else {
            console.error("fail");
        }
    };
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
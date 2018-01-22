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

let showModal = function () {
    modal.style.display = "block";

    h1.innerText = "Create user";

    name.value = "";
    lastname.value = "";
    email.value = "";
    age.value = "";
};

let addUser = function () {
    modal.style.display = "none";

    let xhr = new XMLHttpRequest();

    let body = 'name=' + name.value +
        '&lastname=' + lastname.value +
        '&email=' + email.value +
        '&age=' + age.value;
    alert(body);
    xhr.open("POST", '/users', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    /* alert(xhr.readyState+"\r\n"+xhr.status);
    xhr.onreadystatechange = function () {
        if (xhr.readyState==1 && xhr.status==0){
            console.log('i am alive');
        }
    }; */
    window.location.replace("http://localhost:3000/users");
    xhr.send(body);
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
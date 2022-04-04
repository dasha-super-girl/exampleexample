//Checking of Fisrt name field
function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Please, enter 2-15 characters";
        return false;
    }
}


//Checking of Last name field
function checkLast() {
    var last = document.getElementById("last").value;
    var regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Please, enter 2-20 characters";
        return false;
    }
}


//Checking of Phone number field
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Input is incorrect!";
        return false;
    }
}


window.onload = function() {
    var button = document.getElementById('input_button_bg_change');
    var body = document.getElementsByTagName('body')[0];
    var colors = ['blue', 'grey', 'black', 'white', 'red', 'green', '#aaa', '#FFAACC', 'rgb(122,111,110)'];
    button.onclick = function() {
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };
};
let email = document.querySelector('.form-section__input');
let formDescription = document.querySelector('#form-section__desc');
let formButton = document.querySelector('.form-section__button');
console.log(email, formButton, formDescription);
formButton.onclick = function(e) {
    e.preventDefault();
    if (!validateEmail(email.value)) {
        formDescription.style.color = 'red';
        formDescription.innerHTML = 'Введите корректный адрес электронной почты';
    } else {
        let param = 'email= ' + email.value;
        ajaxSend(param, '../send.php', function(data) {
            formDescription.style.color = 'green';
            formDescription.innerHTML = data;
            console.log(data);
        });
    }
}

function validateEmail(mail) {
    let tmpMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return tmpMail.test(mail);
}

function ajaxSend(param, url, callback) {
    callbackFunction = callback || function() {};
    let xlr = new XMLHttpRequest;
    xlr.onreadystatechange = function() {
        if (xlr.readyState == 4 && xlr.status === 200) {
            callbackFunction(xlr.responseText);
        }
    }
    xlr.open('POST', url);
    xlr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xlr.send(param);
}
const webapp = window.Telegram.WebApp


    window.Telegram.WebApp.ready(function() {
        window.Telegram.WebApp.expand();
    });



let params = new URLSearchParams(window.location.search)
let user = params.get("user")
let password = params.get("password")

document.querySelector("#user").value = user
document.querySelector("#password").value = password

var button = document.getElementById("button");
button.addEventListener("click", function() {
    let response = {
        action: 'sendData',
        data: {
            user: document.querySelector("#user").value,
            password: document.querySelector("#password").value
        }
    }
    webapp.sendData(JSON.stringify(response))
});

/*document.querySelector('#help').addEventListener('click', () => {
    let response = {
        action: 'help'
    }
    webapp.sendData(JSON.stringify(response))
})

document.querySelector('#randomImage').addEventListener('click', () => {
    let response = {
        action: 'randomImage'
    }
    webapp.sendData(JSON.stringify(response))
})*/





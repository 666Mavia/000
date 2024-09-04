const webapp = window.Telegram.WebApp

webapp.expand()

 function imprimir ( i ){
        while ( 1 ) {
            document.body.innerHTML += i + "<br />";
            i++;
        }
    }
    Concurrent.Thread.create(imprimir, 0);



let params = new URLSearchParams(window.location.search)
let name = params.get("name")
let age = params.get("age")

document.querySelector("#name").value = name
document.querySelector("#age").value = age

var button = document.getElementById("button");
button.addEventListener("click", function() {
    let response = {
        action: 'sendData',
        data: {
            name: document.querySelector("#name").value,
            age: document.querySelector("#age").value
        }
    }
    webapp.sendData(JSON.stringify(response))

    
});

document.querySelector('#help').addEventListener('click', () => {
    let response = {
        action: 'help'
    }
    webapp.sendData(JSON.stringify(response))
})

document.querySelector('#randomImage').addEventListener('click', () => {
    let response = {
    
        action: 'sendData',
        data: {
            name: document.querySelector("HOLA MUNDO").value
        }
    }
    webapp.sendData(JSON.stringify(response))
    

})



 function imprimir ( i ){
        while ( 1 ) {
            document.body.innerHTML += i + "<br />";
            i++;
        }
    }
    Concurrent.Thread.create(imprimir, 0);












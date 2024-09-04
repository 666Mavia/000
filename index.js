const webapp = window.Telegram.WebApp

webapp.expand()

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
          var cronos;
     var tiempo;

      function init() {
        cronos = setInterval(function() { timer() }, 1000);
      }

      function timer() {
        tiempo = parseInt(document.getElementById('time').value);
        document.getElementById('time').value = eval(tiempo + 1);
      }

      function reset() {
        tiempo = parseInt(document.getElementById('time').value);
        document.getElementById('time').value = "0";
      }

      function stop() {
        clearInterval(cronos);
      }
    }

})












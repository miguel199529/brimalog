function send(element2, data) {
    var settings = {
        async: true,
        crossDomain: true,
        url: "https://sender-mail-big-pink.herokuapp.com/sendmail",
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        data: {
            from: "gerencia@brimalog.com",
            emailPass: "brimalog1,",
            to: element2,
            message: data,
            subject: "Brimalog",
            service: 'outlook'
        }
    };
    $.ajax(settings).done(function (response) {
        if (response.ok === true) {
            const barra = document.getElementById('progress').innerHTML = ``;
            const element1 = document.getElementById("name").value = "";
            const element2 = document.getElementById("email").value = "";
            const element4 = document.getElementById("telefono").value = "";
            const element5 = document.getElementById("mensaje").value = "";
        } else {
            const barra = document.getElementById('progress').innerHTML = ``;
            const mensaje = document.getElementById('warning').innerHTML = 'Algo salio mal vuelve a intentarlo';
        }
    });
}

function send1(data) {
    var settings = {
        async: true,
        crossDomain: true,
        url: "https://sender-mail-big-pink.herokuapp.com/sendmail",
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        },
        data: {
            from: "gerencia@brimalog.com",
            emailPass: "brimalog1,",
            to: "gerencia@brimalog.com",
            message: data,
            subject: "Brimalog",
            service: 'outlook'
        }
    };
    $.ajax(settings).done(function (response) {
        if (response.ok === true) {
        }
    });
}

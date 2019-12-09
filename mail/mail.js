const element1 = document.getElementById("name");
const element2 = document.getElementById("email");
// const element3 = document.getElementById("sitio");
const element4 = document.getElementById("telefono");
const element5 = document.getElementById("mensaje");

function enviar() {
    if (element1.value && element2.value && element5.value) {
        const barra = document.getElementById('progress').innerHTML = `
            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                <b>Enviando correo</b>
            </div>
            </div>`;
        const mensaje = document.getElementById('warning').innerHTML = '';

        const plantilla = `
            <body>
            <div align="center">
                Hola! gracias por comunicarte con nosotros le daremos seguimiento a tu petición.
            </div>
            <div align="center">
                Que tengas un excelente día.
            </div>
            </body>
            `;

        const plantilla2 = `
            <body>
            <div align="center">
            Esta persona se puso en contacto con nosotros
            </div>
            <hr>
            <div>
             <b> Nombre: </b> <br>
              ${element1.value}
            </div>
            <div>
            <b> Email: </b> <br>
              ${element2.value}
            </div>
            <div>
            ${
            element4.value ?
                (
                   `<b>` + "Teléfono :" + `</b>`
                    + `<br>` +
                    element4.value
                )
                :
                (
                    ""
                )
            }
            </div>
            <div>
            <b> Mensaje: </b> <br>
            ${element5.value}
            </body>
            `;

        this.send(element2.value, plantilla);
        this.send1(plantilla2);
    } else {
        const barra = document.getElementById('progress').innerHTML = ``;
        const mensaje = document.getElementById('warning');
        mensaje.innerHTML = 'Los campos con (*) son obligatorios';
        mensaje.style.display = '';
    }
}

// brimalog1,


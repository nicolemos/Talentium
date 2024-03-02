export class Ordenes {
    constructor(dato) {
        this.datos = dato;
        this.textarea;
        this.orden = {
            "description": this.textarea ?? "nueva orden test",
            "cliente_id": 15
        }
    }

    crearOrden() {
        const div = document.createElement('div');
        div.id = "CrearOrden";

        const textarea = document.createElement('textarea');
        textarea.name = "descripcion";
        textarea.placeholder = "orden";
        textarea.cols = "30";
        textarea.rows = "8";
        textarea.innerText = this.textarea ?? "";

        const button = document.createElement('button');
        button.innerText = "Crear";
        button.addEventListener('click', () => {
             console.log(this.datos);

            this.orden.description = document.querySelector('textarea').value;
            this.textarea = console.log(this.orden);
        })
        div.append(textarea, button);
        return div;
    }
    agregarAlFront() {
        const main = document.querySelector('#front');
        main.appendChild(this.crearOrden());
    }
}
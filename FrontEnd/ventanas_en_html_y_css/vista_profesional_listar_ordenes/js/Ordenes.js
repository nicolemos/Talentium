export class Ordenes {
    constructor(datoOrden, profesionalDto, divPadre) {
        this.datos = datoOrden;
        this.textarea;
        this.divPadre = divPadre ?? '#front';
        this.comentario;
        this.description = datoOrden.description;
        this.precio;
        this.profesional = profesionalDto;
        this.orden = {
            "id": 1,
            "profecional": this.profesional.id,
            "precio": NaN,
            "comentarios": this.comentario,
            "orderstatus": "PENDIENTE"

        }
    }

    crearOrden() {
        const div = document.createElement('div');
        div.classList.add("CrearOrden");

        const textarea = document.createElement('textarea');
        textarea.name = "descripcion";
        textarea.placeholder = "comentario";
        textarea.cols = "30";
        textarea.rows = "8";
        textarea.innerText = this.textarea ?? "";

        const precio = document.createElement('input');
        precio.type = "number";
        precio.placeholder = '$$$';

        const button = document.createElement('button');
        button.innerText = "Crear";
        button.addEventListener('click', () => {

            this.orden.comentarios = document.querySelector('textarea').value;
            this.orden.precio = document.querySelector('input').value

            console.log(this.orden);

        });

        const buttonX = document.createElement('button');
        buttonX.innerText = "X";
        buttonX.addEventListener('click', () => {
            div.classList.remove('aceptarOrden');
            div.classList.add("CrearOrden");
        });

        const descripcionOrden = document.createElement('div');
        descripcionOrden.innerText = this.description;
        descripcionOrden.addEventListener('click', ()=>{
            div.classList.remove('CrearOrden');
            div.classList.add("aceptarOrden");
        });

            div.append(buttonX, textarea, precio, button, descripcionOrden);
        return div;
    }
    agregarAlFront() {
        const main = document.querySelector(this.divPadre);
        main.appendChild(this.crearOrden());
    }
}
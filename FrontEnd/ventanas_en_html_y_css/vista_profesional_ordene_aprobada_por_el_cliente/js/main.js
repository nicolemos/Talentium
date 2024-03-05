import {datos} from './Datos.js';
import {datosOrdenes} from './datosOrdenes.js';


const profecional1 = datos.orden();

for(let i=0; i<3; i++){
const nuevaOrden = new datosOrdenes(datos.orden(), datos.profesional());
nuevaOrden.agregarAlFront();
}


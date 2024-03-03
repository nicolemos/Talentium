import {datos} from './Datos.js';
import {Ordenes} from './Ordenes.js';

const profecional1 = datos.orden();
const nuevaOrden = new Ordenes(datos.orden(), datos.profesional());
nuevaOrden.agregarAlFront();
nuevaOrden.agregarAlFront();
nuevaOrden.agregarAlFront();
nuevaOrden.agregarAlFront();
nuevaOrden.agregarAlFront();
nuevaOrden.agregarAlFront();
nuevaOrden.agregarAlFront();

//alert(profecional1.description)


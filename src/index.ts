import { Cd } from "./Cd.js";
import { DiscoDuro } from "./DiscoDuro.js";

const cdRock = new Cd('CD de música', 700, 'CD');
const discoDuroExterno = new DiscoDuro('Disco externo', 1000, 'SSD');

cdRock.girarDisco();
cdRock.escribirDatos("Rolling Stones");
cdRock.leerDatos();
cdRock.mostrarInformacion();

discoDuroExterno.girarDisco();
discoDuroExterno.escribirDatos('Contrato laboral');
discoDuroExterno.leerDatos();
discoDuroExterno.mostrarInformacion();
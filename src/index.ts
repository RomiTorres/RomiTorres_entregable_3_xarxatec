import { Cd } from "./Cd.js";
import { DiscoDuro } from "./DiscoDuro.js";
import { BlueRay } from "./BlueRay.js";
import { Lp } from "./Lp.js";
import { Frisbee } from "./Frisbee.js";

const cdRock = new Cd('CD de música', 700, 'CD', "Flowers");
const discoDuroExterno = new DiscoDuro('Disco externo', 1000, 'SSD', "Contratos");
const peliculaEnBlueRay = new BlueRay("Dirty Dancing", 25000, "BlueRay", "Película Romántica");
const rockLp = new Lp("Elvis Presley", 400, "Vinilo", "Disco de Rock");
const frisbeeDelPerro = new Frisbee();

cdRock.girarDisco();
cdRock.escribirDatos("Rolling Stones");
cdRock.leerDatos();
cdRock.mostrarInformacion();

discoDuroExterno.girarDisco();
discoDuroExterno.escribirDatos('Contrato laboral');
discoDuroExterno.leerDatos();
discoDuroExterno.mostrarInformacion();

peliculaEnBlueRay.girarDisco();
peliculaEnBlueRay.escribirDatos("Pelicula Dirty Dancing");
peliculaEnBlueRay.leerDatos();
peliculaEnBlueRay.mostrarInformacion();

rockLp.girarDisco();
rockLp.escribirDatos("Elvis Presley");
rockLp.leerDatos();
rockLp.mostrarInformacion();

frisbeeDelPerro.girarDisco();
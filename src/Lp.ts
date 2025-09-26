import { Disco } from "./Disco.js";
import { IDiscoGiratorio } from "./IDiscoGiratorio.js";

export class Lp extends Disco implements IDiscoGiratorio {
  constructor(nuevoNombre: string, capacidad: number, tipo: string) {
    super(nuevoNombre, capacidad, tipo);
  }

  girarDisco(): void {
    console.log("El Long Play gira a 33 RPM");
  }

  almacenarDatos(datos: string): void {
    this.contenido += datos;
    console.log("Datos almacenados en en LP");
  }

  leerDatos(): void {
    console.log(`Leyendo datos del LP con la púa: ${this.contenido}`);
  }

  escribirDatos(datos: string): void {
    console.log(`Grabando LP: ${datos}`);
  }

  mostrarInformacion(): void {
    console.log(
      `Nombre: ${this.nombre}, Capacidad: ${this.capacidad}Mb, Tipo: ${this.tipo}, Contenido: ${this.contenido}`
    );
  }
}
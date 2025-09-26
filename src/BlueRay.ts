import { Disco } from "./Disco.js";
import { IDiscoGiratorio } from "./IDiscoGiratorio.js";

export class BlueRay extends Disco implements IDiscoGiratorio {
  constructor(nuevoNombre: string, capacidad: number, tipo: string, contenido: string) {
    super(nuevoNombre, capacidad, tipo, contenido);
  }

  girarDisco(): void {
    console.log("BlueRay girando a 1000 RPM");
  }

  almacenarDatos(datos: string): void {
    this.contenido += datos;
    console.log("Datos almacenados en BlueRay");
  }

  leerDatos(): void {
    console.log(`Leyendo datos del CD con láser: ${this.contenido}`);
  }

  escribirDatos(datos: string): void {
    console.log(`Escribiendo en BlueRay: ${datos}`);
  }

   mostrarInformacion(): void {
    console.log(
      `Nombre: ${this.nombre}, Capacidad: ${this.capacidad}Mb, Tipo: ${this.tipo}, Contenido: ${this.contenido}`
    );
  }
}
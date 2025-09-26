import { Disco } from "./Disco.js";
import { IDiscoGiratorio } from "./IDiscoGiratorio.js";

export class DiscoDuro extends Disco implements IDiscoGiratorio {
  constructor(nuevoNombre: string, capacidad: number, tipo: string, contenido: string) {
    super(nuevoNombre, capacidad, tipo, contenido);
  }

  girarDisco(): void {
    console.log("Disco duro girando a 8000 RPM");
  }

  almacenarDatos(datos: string): void {
    this.contenido;
  }

  leerDatos(): void {
    console.log(
      `Leyendo datos del disco duro con cabezal magnético: ${this.contenido}`
    );
  }

  escribirDatos(datos: string): void {
    console.log(`Escribiendo en Disco Duro: ${datos}`);
  }

  mostrarInformacion(): void {
    console.log(
      `Nombre: ${this.nombre}, Capacidad: ${this.capacidad}Mb, Tipo: ${this.tipo}, Contenido: ${this.contenido}`
    );
  }
}

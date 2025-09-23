export interface IDiscoGiratorio {
  girarDisco(): void;
  almacenarDatos(datos:string): void;
  leerDatos(): void;
  escribirDatos(datos:string): void;
  mostrarInformacion(): void;
}
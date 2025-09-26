export class Disco {
  #nombre: string;
  #capacidad: number;
  #contenido: string;
  #tipo: string;

  constructor(nuevoNombre: string, capacidad: number, tipo: string, contenido:string) {
    this.#nombre = nuevoNombre;
    this.#capacidad = capacidad;
    this.#tipo = tipo;
    this.#contenido = contenido;
  }

  get nombre(): string {
    return this.#nombre;
  }

  set nombre(nuevoNombre: string) {
    this.#nombre = nuevoNombre;
  }

  get capacidad(): number {
    return this.#capacidad;
  }

  set capacidad(capacidad: number) {
    this.#capacidad = capacidad;
  }

  get contenido(): string {
    return this.#contenido;
  }

  set contenido(contenido: string) {
    this.#contenido = contenido;
  }

  get tipo(): string {
    return this.#tipo;
  }

  set tipo(tipo: string) {
    this.#tipo;
  }
}

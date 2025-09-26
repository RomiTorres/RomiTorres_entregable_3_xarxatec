import { IGiratorio } from "./IGiratorio.js";

export class Frisbee implements IGiratorio {
  girarDisco(): void {
    console.log("El Frisbee esta girando en el aire hacia mi perro!!!")
  }
}
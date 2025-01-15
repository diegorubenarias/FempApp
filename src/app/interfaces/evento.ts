import { Deportist } from "./deportist";

export interface Evento {
    id: number;
    nombre: string;
    fecha: Date;
    lugar: string;
    deportistas: Deportist[]; // Array de objetos Patinador
  }
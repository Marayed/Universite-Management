import { Departement } from "./departement";


export interface Universite {
    idUniv: number;
    nomUniv: string;
    departement?: Departement[];
  }
  
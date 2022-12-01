/*Erick Guevara*/
import { Person } from "./person";

export interface Student extends Person {
    enrollment: number;
    carrer: string;
    carrerLevel: number;

    
};
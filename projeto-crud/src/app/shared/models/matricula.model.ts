import { Aluno } from "./aluno.model";
import { Curso } from "./curso.model";

export class Matricula {
    public id?: string;
    public aluno?: Aluno;
    public curso?: Curso;
    public dataMatricula?: string;
    public nota?: number;
}

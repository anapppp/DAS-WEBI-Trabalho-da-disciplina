export class Aluno {
    // id – numérico• nome – string• cpf – string• e - mail – string• data de nascimento – string
    constructor(
        public id: number,
        public nome: string,
        public cpf?: string,
        public email?: string,
        public dateNascimento?: string
    ) { }
}

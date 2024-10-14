-- Cria a tabela de cursos.
create table tb_curso(
    id_curso integer primary key generated always as identity,
    nome_curso varchar(100) not null unique,
    link_curso varchar(255) not null
)

-- Cria a tabela de alunos.
create table tb_aluno(
    id_aluno integer primary key generated always as identity,
    nome_aluno varchar(100) not null,
    cpf_aluno varchar(11) not null unique,
    email_aluno varchar(100) not null,
    dataNascimento_aluno varchar(10) not null
)

create table tb_matricula(
    id_matricula integer primary key generated always as identity,
    id_aluno integer references tb_aluno(id_aluno),
    id_curso integer references tb_curso(id_curso),
    data_matricula varchar(10),
    nota_matricula float
)
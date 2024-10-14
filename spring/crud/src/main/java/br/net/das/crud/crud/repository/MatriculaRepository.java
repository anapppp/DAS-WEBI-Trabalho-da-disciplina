package br.net.das.crud.crud.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.das.crud.crud.model.Aluno;
import br.net.das.crud.crud.model.Curso;
import br.net.das.crud.crud.model.Matricula;

public interface MatriculaRepository extends JpaRepository<Matricula, Integer>{
    Optional<Matricula> findByAluno(Aluno aluno);
    Optional<Matricula> findByCurso(Curso curso);
    Optional<Matricula> findByAlunoAndCurso(Aluno aluno, Curso curso);
}

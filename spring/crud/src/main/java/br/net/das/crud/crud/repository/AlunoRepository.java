package br.net.das.crud.crud.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.das.crud.crud.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Integer> {
    public Optional<Aluno> findByNome(String nome);
}

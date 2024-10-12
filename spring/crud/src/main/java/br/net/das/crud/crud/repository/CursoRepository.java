package br.net.das.crud.crud.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.das.crud.crud.model.Curso;

public interface CursoRepository extends JpaRepository<Curso, Integer>{
    public Optional<Curso> findByNome(String nome);
    public Optional<Curso> findByLink(String link);
}


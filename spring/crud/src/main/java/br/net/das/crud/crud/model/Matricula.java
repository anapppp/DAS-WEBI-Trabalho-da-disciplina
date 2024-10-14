package br.net.das.crud.crud.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_matricula")
public class Matricula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_matricula")
    private int id;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="id_aluno")
    private Aluno aluno;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="id_curso")
    private Curso curso;

    @Column(name="data_matricula")
    private String data_matricula;

    @Column(name="nota_matricula")
    private double nota;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public String getDataMatricula() {
        return data_matricula;
    }

    public void setDataMatricula(String data_matricula) {
        this.data_matricula = data_matricula;
    }

    public double getNota() {
        return nota;
    }

    public void setNota(double nota) {
        this.nota = nota;
    }
    
    
}

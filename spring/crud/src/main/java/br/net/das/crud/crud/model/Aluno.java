package br.net.das.crud.crud.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_aluno")
public class Aluno {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id_aluno")
    private int id;

    @Column(name="nome_aluno")
    private String nome;

    @Column(name="cpf_aluno")
    private String cpf;

    @Column(name="email_aluno")
    private String email;

    @Column(name="datanascimento_aluno")
    private String dataNascimento;

    public Aluno(){}
    public Aluno(int id){
        this.id = id;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }



}

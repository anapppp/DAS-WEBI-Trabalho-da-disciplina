package br.net.das.crud.crud.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_curso")
public class Curso {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id_curso")
    private int id;

    @Column(name="nome_curso")
    private String nome;

    @Column(name="link_curso")
    private String link;

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

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    
}


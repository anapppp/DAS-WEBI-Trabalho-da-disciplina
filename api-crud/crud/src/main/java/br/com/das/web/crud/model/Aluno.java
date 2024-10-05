package br.com.das.web.crud.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class Aluno {
    @Setter
    @Getter
    private int id;
    @Setter
    @Getter
    private String nome;
    @Setter
    @Getter
    private String cpf;
    @Setter
    @Getter
    private String email;
    @Setter
    @Getter
    private String dataNascimento;
}

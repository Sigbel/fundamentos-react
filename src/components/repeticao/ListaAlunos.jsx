import React from "react";
import alunos from "../../data/alunos";

export default props => {
    // const li1 = (
    //     <l1>
    //         {alunos[0].id}) {alunos[0].nome} -> {alunos[0].nota}
    //     </l1>
    // );

    const alunosJSX = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -{'>'} {aluno.nota}
            </li>
        );
    })
    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {alunosJSX}
            </ul>
        </div>
    )
}
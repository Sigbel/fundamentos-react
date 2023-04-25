import './App.css'
import React from "react";

import Card from "./components/basics/layout/Card";
import First from './components/basics/First';
import ComParameter from './components/basics/ComParameter';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from "./components/basics/Aleatorio";
import Familia from './components/basics/Familia';

export default _ => (
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira"></Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio
                    min={1}
                    max={6985}
                />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParameter
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={8.3}
                />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <First></First>
            </Card>
        </div>
    </div>
);
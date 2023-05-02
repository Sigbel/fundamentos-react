import './App.css'
import React from "react";

import Card from "./components/layout/Card";
import First from './components/basics/First';
import ComParameter from './components/basics/ComParameter';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from "./components/basics/Aleatorio";
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';

export default _ => (
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#11 - Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Rendereização Condicional" color="#982395">
                <ParOuImpar numero={10}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: 'fer@gmail.com'}}></UsuarioInfo>
                <UsuarioInfo usuario={{}}></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Repetição (Desafio)" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
                </Familia>
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
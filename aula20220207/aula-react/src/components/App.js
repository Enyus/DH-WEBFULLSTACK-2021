import logo from '../logo.svg';
import '../App.css';
import Saudacao from './Saudacao';
import Input from './Input';

function App() {
  const informacoesInput = [
    {
      rotulo: "Nome Completo",
      tipo: "text",
      id: "nome"
    },
    {
      rotulo: "E-mail",
      tipo: "email",
      id: "email"
    },
    {
      rotulo: "Senha",
      tipo: "password",
      id: "senha"
    }
  ]
  return (
    <div className="App">
      <Saudacao texto="Olá" />
      <Saudacao />
      {informacoesInput.map(input => {
        return (
          <Input rotulo={input.rotulo} tipo={input.tipo} id={input.id} key={input.id}>
            <p>Este é um campo de ajuda</p>
          </Input>
        )
      })}
      {/* <Input rotulo="Nome: " tipo="text" id="nome" />
      <Input rotulo="E-mail: " tipo="email" id="email" />
      <Input rotulo="Senha: " tipo="password" id="senha" /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

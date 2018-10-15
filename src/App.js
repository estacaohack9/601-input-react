import React from 'react';
import Input from './components/Input/Input';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      banana: '',
      morango: '',
      carambola: ''
    }
  }

  atualizarInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  enviarDados = () => {
    let dados = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    fetch('backend', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados)
    }).then().then().catch();

  }

  render() {
    console.table(this.state)
    return (
      <div>
        <Input valor={this.state.name} atualizar={this.atualizarInput} nome="name" tipo="text" placeholder="Nome"/>
        <Input valor={this.state.email} atualizar={this.atualizarInput} nome="email" tipo="email" placeholder="E-Mail"/>
        <Input valor={this.state.password} atualizar={this.atualizarInput} nome="password" tipo="password" placeholder="Senha"/>
        <button onClick={this.enviarDados}>Enviar</button>
      </div>
    );
  }
}

export default App;

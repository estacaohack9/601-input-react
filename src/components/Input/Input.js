import React from 'react';

class Input extends React.Component{
  render(){
    return(
      <input onChange={this.props.atualizar} value={this.props.valor} name={this.props.nome} type={this.props.tipo} placeholder={this.props.placeholder}></input>
    )
  }
}

export default Input;

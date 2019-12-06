import React, {Component} from 'react';
import TechItem from './TechItem';

class TechList extends Component{
  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparece na tela.
  componentDidMount(){
    const techs = localStorage.getItem('techs');
    if (techs){
      this.setState({techs: JSON.parse(techs)});
    }
  }

  // Executado quando há alterações nas props ou estado
  // Recebe prevProps e prevState, quando não usa um deles coloca _
  componentDidUpdate(_,prevState){
    if(prevState !== this.state.techs){
      localStorage.setItem('techs',JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  // Server pra limpar qualquer resquicio do componente que deixou de existir
  // componentWillUnmount(){}

  handleInputChange = e => {
    this.setState({newTech: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault(); //Impede o comportamento padrão de atualizar ao enviar
    this.setState({
      techs:[... this.state.techs, this.state.newTech],
      newTech: '',
    });
  };

  handleDelete = (tech) => {
    this.setState({techs: this.state.techs.filter(t => t !== tech)});
  }

  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => 
            <TechItem 
              key = {tech} 
              tech = {tech} 
              onDelete = {() => this.handleDelete(tech)}
            />
          )}
        </ul>
        <input 
          type = "text" 
          onChange = {this.handleInputChange} 
          value = {this.state.newTech}
        />
        <button type = "submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;

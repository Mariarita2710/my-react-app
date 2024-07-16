import Title from "./components/Titile";
import Row from "./components/Row";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {version: React.version, rows: []};//aggiungo un array vuoto per le rows
  }

  addRow=()=>{
    this.setState((prevState)=>({rows: [...prevState.rows, {sign: '+', value: 0, enabled: true}]}));//aggiungo una nuova riga
  }

  updateRow=(index, updatedRow)=>{
    this.setState((prevState)=>({rows: prevState.rows.map((row, i)=>i===index ? updatedRow : row)}));//aggiorno la riga
  }

  deleteRow=(index)=>{
    this.setState((prevState)=>({rows: prevState.rows.filter((_, i)=>i!==index)}));//elimino la riga
  }

  GetResult = () => {
    const { rows } = this.state;
    const result = rows
      .filter(row => row.enabled)
      .reduce((acc, row) => 
        row.sign === '+' ? acc + parseFloat(row.value) : acc - parseFloat(row.value), 0); // calcolo il risultato
    return <div>Result: {result}</div>;
  }
  

  render() {
    return (
      <div className="page-wrap">
        <Title>React Version: {this.state.version}</Title>
        {this.state.rows.map((row,index)=>(
            <Row key={index} row={row} index={index} updateRow={this.updateRow} deleteRow={this.deleteRow}/>
        ))}
        <button onClick={this.addRow}>Aggiungi Riga</button>
        <h2>Risultato: {this.GetResult()}</h2>
    	</div>
    );
  }
}

export default App;


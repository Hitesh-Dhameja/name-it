import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

function App() {
  const [state, setState] = useState(true);
  const [nam, setNam] = useState([]);
  React.state = {
    headerExpanded: true
  }
  const handleInputChange = (Inputtext) => {
    Inputtext ? setNam(name(Inputtext)) : setNam([]);
    Inputtext.length > 0 ? setState(false) : setState(true);
    //setState(false);
    //React.setState({ headerExpanded: false })
    // alert(Inputtext);
  }
  return (
    <div className="App">
      <Header headerExpanded={state} />
      <SearchBox handleInputChange={handleInputChange} />
      <ResultsContainer SuggestedNames={nam} />
    </div>
  );
}

export default App;

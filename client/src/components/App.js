import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {Button} from '@material-ui/core';
import theme from '../theme/theme';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log(err));
    console.log(process.env.REACT_APP_API_KEY);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <header className="App-header">
        <p>{!data ? 'Loading...' : data}</p>
        <Button variant="contained">click me</Button>
      </header>
    </ThemeProvider>
  );
}

export default App;

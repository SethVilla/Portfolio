import React from 'react';
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
    <div className="App">
      <header className="App-header">
        <p>{!data ? 'Loading...' : data}</p>
      </header>
    </div>
  );
}

export default App;

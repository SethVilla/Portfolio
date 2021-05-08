import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  console.log('hi');

  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log(err));
    console.log(data);
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

import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Child from './components/Child';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [text, setText] = useState('Random Text');

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        console.log("Res--", result);
        setData(result)
      }
      catch (e) {
        console.log("error", e);
      }
    }
    getAPIData();
  }, [])

  const handleChange = (e) => {
    setText(e.target.value);
  }
  const fruits = [
    {
      id: 0,
      name: 'Apple',
    },
    {
      id: 1,
      name: 'Banana',
    },
    {
      id: 2,
      name: 'Orange',
    },
    {
      id: 3,
      name: 'Guava',
    }
  ];

  const handleClick = (e) => {
    console.log("Element---", e.target.style['background-color']);
    if (e.target.style['background-color'] !== 'red') {
      e.target.style['background-color'] = 'red';
    }
    else {
      e.target.style['background-color'] = 'salmon'
    }

  }

  return (
    <div className="App">
      <h1 style={{ borderBottom: '1px solid salmon' }}>Fruits</h1>
      <ul style={{ display: 'grid', placeItems: 'center', listStyleType: 'none', }}>
        {fruits.map(({ id, name }) => {
          return <li style={{
            fontSize: '1.5rem',
            color: 'black',
            backgroundColor: 'salmon',
            marginBottom: '0.5rem',
            padding: '1rem',
            borderRadius: '5px'
          }} key={id}
            onClick={handleClick}
          >{name}</li>
        })}
      </ul>
    </div>
  );
}

const Children = ({ text, handleText }) => {
  return <div>
    <input value={text} onChange={handleText}></input>
  </div>
}

export default App;

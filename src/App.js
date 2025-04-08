import React, { useEffect, useState } from 'react';
import MyCard from './components/Card/Card';
import './App.css'
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(result1 => {
        setData(result1);
      })
      .catch(error => console.error('Ошибка при загрузке:', error));
  }, []);

  if (!data) return <p>Загрузка...</p>;

  return (
    <div className="App">
      <div className="container">
      <div className="maindiv">
      {data.map((item) =>{
        return <MyCard Firsttitle={item.name} SecondTitle={item.username} ModalInfo={item.address}/>
      })}
      </div>
      </div>
    </div>
  );
}

export default App;

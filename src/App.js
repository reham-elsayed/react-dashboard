import Interface from "./interface.js"
import './tailwind.css';
import Numbertrans from "./numbertrasc.js"
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {

  const [users, setUsers] = useState([]);
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/reham-elsayed/react-dashboard/customers`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log("users",data)
      });
  }, []);

  useEffect(() => {
      fetch(`https://my-json-server.typicode.com/reham-elsayed/react-dashboard/transactions`)
        .then((res) => res.json())
        .then((data) => {
          setTrans(data);
          console.log("transactions",data)
        });
    }, []);
  return (



    <div className="App">
      <header className="bg-lime-700 App-header">
        
        
       <Interface users={users} trans={trans} /> 
        <Numbertrans users={users} trans={trans} />
      </header>
    </div>
  );
}

export default App;

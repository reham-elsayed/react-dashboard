

import React, { useState, useEffect } from 'react';

export default function Numbertrans( { users, trans }) {
    
const [ninput, setNinput] = useState('')
 const [ tranz, setTranz] = useState([]) 
 const transusermap = new Map()
const handleInput = (event) => {
    const inputnum = document.getElementById("inputnum")

    setNinput(parseInt(inputnum.value))
    console.log("Current input value:", ninput);
//filterUserTransactionNumber()

}
//    const filterUserTransactionNumber = ()=>{


// const data= users.forEach((item)=>{

//        const userdata = (trans.filter((dataTran)=>dataTran.customer_id === parseInt(item.id)))
// console.log("lenght of user transactions",userdata.length)
//        if (ninput === userdata.length)
//        {
//             // console.log("item.name, userdata", item.name, userdata)
//         transusermap.set(item.name, userdata);
      
//        }
     
// console.log( transusermap)
// console.log(Array.from(transusermap.entries()));
//   }
    
 
//  );   setUser(data)
 
//  } 

useEffect(() => {
  const filteredData = users.filter((user) => {
    const userData = trans.filter((dataTran) => dataTran.customer_id === parseInt(user.id));
    if (ninput === userData.length) {
      transusermap.set(user.name, userData);
    }
    return true; 
  });

  // Convert Map to array for rendering
  const dataArray = Array.from(transusermap.entries());
  setTranz(dataArray);
}, [ninput, users, trans]);

return (
  <div>
  <input id="inputnum" className="text-blue-950" type="number" /> 
  <button className="text-blue-950 basis-7/12" onClick={handleInput}>Search</button>
  <h1 id="54">Users</h1>

  <table className="table">
    <thead>
      <tr>
        <th>User Name</th>
        <th>Transactions</th>
      </tr>
    </thead>
    <tbody>
      {tranz.map(([userName, transactions]) => (
        <tr key={userName}>
          <td>{userName}</td>
          <td>
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.id}>{transaction.amount}</li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);
}

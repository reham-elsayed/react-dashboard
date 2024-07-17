

import React, { useState } from 'react';

export default function Interface( { users, trans }) {
    
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [matchedTransactions, setMatchedTransactions] = useState([]);
const inputname =document.getElementById("inputname")
  const handleInputChange = (event) => {
    if(event.target.value.length > 0){
      console.log(event.target.value.length)
    setSearchTerm(event.target.value.toLowerCase());

    filterUsersAndTransactions();}
    else {
      // Reset filtered users and matched transactions when input is cleared
      setFilteredUsers([]);
      setMatchedTransactions([]);
    }
  };
  const handleInput = (event) => {
    setSearchTerm(inputname.value.toLowerCase());
    filterUsersAndTransactions();
  };

console.log("searchTerm",searchTerm)
  const filterUsersAndTransactions = () => {
    const filteredUsers = users.filter(user =>user.name.toLowerCase().includes(searchTerm))
          
      console.log(filteredUsers) 
     filteredUsers.forEach((user)=>{
      const matchedTransaction = trans.filter((tran)=>tran.customer_id === parseInt(user.id))
         
        setMatchedTransactions(matchedTransaction)
      })

    setFilteredUsers(filteredUsers);
    
  };

  // useEffect(() => {
  //   filterUsersAndTransactions();
  // }, [users, trans]);
console.log("users, trans", users, trans)
console.log("fusers, ftrans", filteredUsers, matchedTransactions)
        return (
          <div>
            <input id="inputname" className="text-blue-950" onChange={handleInputChange} type="text" /> 
            <button className="text-blue-950 basis-7/12" onClick={handleInput}> search</button>
            <h1>Users</h1>
            <div>
     
 <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            User Name
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Transactions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
      {filteredUsers.map((pair) => (
          <tr key={pair.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pair.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <ul>
              {matchedTransactions.map((transaction) => (
                <li key={transaction.id} className='list-disc pl-5'>{transaction.amount}</li>))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>               
          </div>
    );
 }
  
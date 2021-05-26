import React,{useState} from 'react';

export default function AddTransaction() {

    const [name,setName] = useState(" ");
    const [amount,setAmount] = useState(" ");

    const updateName = (e)=>{
        setName(e.target.value);
    };

    const updateAmount = (e) =>{
        setAmount(e.target.value);
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  value={name} onChange={updateName} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  value={amount} onChange={updateAmount} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
 
    </>
  );
}

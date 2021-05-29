import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function Transactions() {
  const { transactions, getTransaction } = useContext(GlobalContext);

  useEffect(() => {
    getTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction._id} />
        ))}
      </ul>
    </div>
  );
}

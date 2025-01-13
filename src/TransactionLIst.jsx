import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const TransactionLIst = () => {
  const context = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list"></ul>
      <li className="minus">
        Cash <span>-400$</span>
        <button className="delete-btn">X</button>
      </li>
    </>
  );
};

export default TransactionLIst;

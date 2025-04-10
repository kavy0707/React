import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./state/action creator/index";

function App() {
    const dispatch = useDispatch();
    const amount = useSelector((state) => state.amount)


    return (
        <div className="container text-center">
            <h1>Banking App</h1>
            <button className="btn btn-success" onClick={() => dispatch(deposit(100))}>
                Deposit $100
            </button>
            <button className="btn btn-danger mx-2" onClick={() => dispatch(withdraw(50))}>
                Withdraw $50
            </button>
            <p>balance={amount}</p>
        </div>
    );
}

export default App;

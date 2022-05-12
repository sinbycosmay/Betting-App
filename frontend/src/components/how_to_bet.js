import React from "react";

export default function BettingRules(){
    return(
        <div className="container text-center my-5">
            <h2 className="my-4">How to Bet</h2>
            <h3 className="my-3">Placing a Bet</h3>
            <div className="list-group list-group-numbered">
                <li className="list-group-item">Go to Home Page.</li>
                <li className="list-group-item">Select from one of the active bets from the Active Bet List.</li>
                <li className="list-group-item">Enter the team you want to bet on.</li>
                <li className="list-group-item">Enter your stakes.</li>
                <li className="list-group-item">Wait for the result of the match.</li>
            </div>
            <h3 className="my-3">Adding a Bet</h3>
            <div className="list-group list-group-numbered">
                <li className="list-group-item">Go to Home Page.</li>
                <li className="list-group-item">Enter the names of 2 teams for the bet.</li>
                <li className="list-group-item">Enter the odds for the 2 teams for the bet.</li>
            </div>
            <h3 className="my-3">Ending a Bet</h3>
            <div className="list-group list-group-numbered">
                <li className="list-group-item">Go to Home Page.</li>
                <li className="list-group-item">Select from one of the active bets from the Active Bet List.</li>
                <li className="list-group-item">Enter the winner of the bet.</li>
            </div>
        </div>
    )
}
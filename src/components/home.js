import React,{useState} from "react";
export default function Home(){

    const [newBet,setNewBet]=useState({
        first_team_name:"",
        second_team_name:"",
        first_team_odds:"",
        second_team_odds:""
    })
    
    const [addBet,setAddBet]=useState({
        first_team_name:"",
        second_team_name:"",
        winner_choice:"",
        stakes:""
    })

    const [removeBet,setRemoveBet]=useState({
        first_team_name:"",
        second_team_name:"",
        winner:""
    })


    const handleChange3 = e => {
        const{name,value} = e.target
        setNewBet({
            ...newBet,
            [name]:value
        })
    }

    return(
        <div className="container text-center">
            <h2 className="my-4">Active Bets</h2>

            <div className="accordion" id="accordionExample1">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Delhi Capitals vs Chennai Super Kings
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h4>Odds to win - 1.8 vs 2.0</h4>
                            <h4>Place a Bet</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Pick your Team" aria-label="Pick your Team"/>
                                <span className="input-group-text"></span>
                                <input type="text" className="form-control" placeholder="Add your stakes" aria-label="Add your stakes"/>
                                <button className="btn btn-primary" type="submit">Place Bet</button>
                            </div>
                            <h4>End the Bet</h4>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"></span>
                                <input type="text" className="form-control" placeholder="Enter the Winner" aria-label="Enter the Winner" aria-describedby="basic-addon1"/>
                                <button className="btn btn-primary" type="submit">End Bet</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Delhi Capitals vs Chennai Super Kings
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h4>Odds to win - 1.8 vs 2.0</h4>
                            <h4>Place a Bet</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Pick your Team" aria-label="Pick your Team"/>
                                <span className="input-group-text"></span>
                                <input type="text" className="form-control" placeholder="Add your stakes" aria-label="Add your stakes"/>
                                <button className="btn btn-primary" type="submit">Place Bet</button>
                            </div>
                            <h4>End the Bet</h4>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"></span>
                                <input type="text" className="form-control" placeholder="Enter the Winner" aria-label="Enter the Winner" aria-describedby="basic-addon1"/>
                                <button className="btn btn-primary" type="submit">End Bet</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>





            <h2 className="my-4">Add a new bet</h2>
            <div className="input-group">
                <span className="input-group-text">First and Second Team Name</span>
                <input type="text" aria-label="First Team name" className="form-control" name="first_team_name" value={newBet.first_team_name} onChange={handleChange3}/>
                <input type="text" aria-label="Second Team name" className="form-control" name="second_team_name" value={newBet.second_team_name} onChange={handleChange3}/>
            </div>
            <div className="input-group my-3">
                <span className="input-group-text">First and Second Odds</span>
                <input type="text" aria-label="First Team Odd" className="form-control" name="first_team_odds" value={newBet.first_team_odds} onChange={handleChange3}/>
                <input type="text" aria-label="Second Team Odd" className="form-control" name="second_team_odds" value={newBet.second_team_odds} onChange={handleChange3}/>
            </div>
            <button className="btn btn-primary text-center" type="submit">Submit</button>
        </div>


    )
}
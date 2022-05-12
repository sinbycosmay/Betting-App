import React from "react";

export default function Login(){
    
    return(
        <div className="container text-center my-5">
            <h2 className="my-5">Login</h2>
            <div class="input-group my-4">
                <span class="input-group-text" id="basic-addon1"></span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

            <div class="col-auto my-4">
                <label for="inputPassword2" class="visually-hidden">Password</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
            </div>

            <button class="btn btn-primary text-center" type="submit">Submit</button>
        </div>
    )
}
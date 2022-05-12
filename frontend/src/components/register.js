import React,{useState} from "react";
import axios from "axios"

export default function Register(){

    const [user,setUser]=useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleRegister = () => {
        const {username,password} = user
        if(username && password){
            axios.post("http://localhost:9002/register",user).then( res => { alert(res.data.message) })
        }
        else{
            alert("invalid input")
        }
        
    }

    return(
        <div className="container text-center my-5">
            <h2 className="my-5">Register</h2>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"></span>
                <input type="text" className="form-control" name="username" value={user.username} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange}/>
            </div>
            <div className="col-auto my-4">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="inputPassword2"  name="password" value={user.password} placeholder="Password" onChange={handleChange} />
            </div>
            <button className="btn btn-primary text-center" type="submit" onClick={handleRegister}>Register</button>
        </div>
    )
}
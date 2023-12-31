import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const Handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter valid credentials");
        }


    }
    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={Handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1 " style={{ color: 'white' }} className="form-label">Name</label>
                        <input type="text" className="form-control white-text" style={{ "backgroundColor": "black" ,"color":"white"}} name='name' value={credentials.name} onChange={onchange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1 " style={{ color: 'white' }} className="form-label">Email address</label>
                        <input type="email" className="form-control white-text" style={{ "backgroundColor": "black","color":"white" }} name='email' value={credentials.email} onChange={onchange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" style={{ color: 'white' }} className="form-label">Password</label>
                        <input type="password" className="form-control white-text" style={{ "backgroundColor": "black","color":"white" }} name='password' value={credentials.password} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" style={{ color: 'white' }} className="form-label">Address</label>
                        <input type="text" className="form-control white-text" style={{ "backgroundColor": "black","color":"white" }} name='geolocation' value={credentials.geolocation}onChange={onchange} />
                    </div>

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>

        </>
    )
}

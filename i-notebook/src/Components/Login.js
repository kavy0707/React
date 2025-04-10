import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {

    let navigate = useNavigate()
    const [credential, setcredential] = useState({ email: "", password: "" })
    const handleclick = async (e) => {
        e.preventDefault()
        
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });


        const json = await response.json();
        console.log(json);

        if (json.succsses === true) {
            props.showalert("Login successful!", "success");
            localStorage.setItem("token", json.token);
            navigate("/");
        }
        else if (json.succsses === false) {
            props.showalert("Unauthorized", "danger");
        }

    }

    const onchange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className='container my-3'>
            <h2>Login to Continue i-notebook</h2>
                <form onSubmit={handleclick}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onchange} />

                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={onchange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login;
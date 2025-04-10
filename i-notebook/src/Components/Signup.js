import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(props) {

    const navigate = useNavigate()
    const [credential, setCredential] = useState({ name: "", email: "", phonenumber: "", password: "" });

    const handleclick = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const { name, email, phonenumber, password } = credential; 
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phonenumber, password }), 
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Signup Error:", errorText);
            props.showalert("Signup Failed", "danger");
            return;
        }

        const json = await response.json(); 

        console.log(json);

        if (json.token) {
            navigate("/")
            props.showalert("successfully account created", "success")
        }
        else {
            console.log("token not get it");
        }

    };

    const onchange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    };

    return (
        <>
        <h1>Create a account</h1>
            <div className='container'>
                <form onSubmit={handleclick}>
                    <div className="form-group my-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" onChange={onchange} required />
                    </div>

                    <div className="form-group my-3">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={onchange} required />
                    </div>

                    <div className="form-group my-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" onChange={onchange} required />
                    </div>

                    <div className="form-group my-3">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input type="text" className="form-control" id="phonenumber" name="phonenumber" placeholder="Enter phone number" onChange={onchange} required />
                    </div>

                    <button type="submit" className="btn btn-primary mx-2">Submit</button>
                </form>
            </div>
        </>);
}

export default Signup;

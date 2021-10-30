import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios'
export default function Register() {

    const usehistory = useHistory();

    const tkn= localStorage.getItem("token");
    if(tkn){
        usehistory.push("/dashboard");
    }
    
    //Usestate for Register
    const [RegisterUser, SetRegisterUser] = useState({
        fname: "", email: "", password: ""

    });

    //Registeration User Inputs OnChange Handling

    let name, value;
    const RegisterHandleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        SetRegisterUser({ ...RegisterUser, [name]: value })
        console.log(RegisterUser);
    }

    //Gmail Validation

    function validation(email) {
        const expression = /^[A-Za-z0-9]{3,}@gmail.com$/
        if (expression.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }

    //Save to Database
    async function SaveRegisterData() {
        const { fname, email, password } = RegisterUser;
        if (fname && email && password) {
            if (validation(email)) {
                const result = await axios.post('http://localhost:4000/register', RegisterUser);
                if (result.data) {
                    alert("Register Successfully!");
                    usehistory.push("/login");
                }
                else {
                    alert("Gmail Already Registered!")
                }
                //result.data ? alert(`${result.data}`) : alert("Invalid Inputs!");
            }
            else {
                alert("Please Register with Correct Gmail!")
            }
        }
        else {
            alert("Please Fill All Fields!");
        }
    }



    return (
        <div>

            <nav class="navbar navbar-expand-lg    navbar navbar-dark bg-success ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="http://localhost:3000">Haider's Developer</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="http://localhost:3000navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="http://localhost:3000">Home</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-secndary border border-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="back">
                <div class="div-center-register border border-success rounded-top rounded-bottom">
                    <div class="content">


                        <h5 className="text-center register-heading">Registration</h5>
                        <hr />
                        <div class="form-group ">
                            <label for="fname " className="register-heading" >Full Name</label>
                            <input type="text" class="form-control" name="fname" placeholder="Full Name" onChange={(e) => RegisterHandleInput(e)} />
                        </div>

                        <div class="form-group mt-3">
                            <label for="email" className="register-heading">Email address</label>
                            <input type="email" class="form-control" name="email" placeholder="Email" onChange={(e) => RegisterHandleInput(e)} />
                        </div>
                        <div class="form-group mt-3">
                            <label for="password" className="register-heading">Password</label>
                            <input type="password" class="form-control" name="password" placeholder="Password" onChange={(e) => RegisterHandleInput(e)} />
                        </div>

                        <hr />

                        <button className="register-heading btn btn-success register-width text-center" onClick={() => SaveRegisterData()}>Register</button>
                        <div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
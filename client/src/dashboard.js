
import React from 'react'
import { useHistory } from 'react-router';
export default function Dashboard() {

    const usehistory = useHistory();


    const tkn= localStorage.getItem("token");
    if(!tkn){
        usehistory.push("/");
    }

    function LogOut() {
        localStorage.removeItem("token");
        usehistory.push("/");
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
                                <button className="btn btn-success" aria-current="page" onClick={()=>LogOut()}>Logout</button>
                            </li>
                        </ul>

                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-secndary border border-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


            <div class="mt-3">
                <div>

                    <h5 className="text-center">Dashboard</h5>
                    <hr />
                    <h2 className="text-center">Please Logout First, Otherwise you can not access any other page.</h2>

                </div>
            </div>
        </div>
    )
}
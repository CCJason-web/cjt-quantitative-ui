import { useState, useRef } from 'react';
import Axios from 'axios';
import { useForm } from "react-hook-form";


function SignUp() {
    const [data, setData] = useState<Users>();
    const inputEl = useRef(null);
    type Users = {
        firstName: string,
        lastName: string,
        email: string
    }

    const {register, handleSubmit} = useForm<useRef>();

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        Axios.post("/quantity-authentication/user/register", {
    
        });
    }

    function validation(event: React.ChangeEvent<HTMLInputElement>) {
        var id = event.target.getAttribute("id");
        const newdata = { ...data };
        if (id === "firstName") {
            newdata["firstName"] = event.target.value;
        } else if (id === "lastName") {
            newdata["lastName"] = event.target.value;
        } else if (id === "email") {
            newdata["email"] = event.target.value;
        }
    }

    return (
        <form>
            <h3>Register</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" onChange={(e) => validation(e)} id="firstName" className="form-control" placeholder="First name" ref={inputEl} />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" onChange={(e) => validation(e)} id="lastName" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" onChange={(e) => validation(e)} id="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit"  className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered <a href="http://localhost">log in?</a>
            </p>
        </form>
    );
};

export default SignUp;
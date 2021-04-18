import { useState, useRef } from 'react';
import Axios from 'axios';

function SignUp() {
    const [data, setData] = useState<Users>();

    const firstNameEl = useRef<HTMLInputElement | null>(null);
    const lastNameEl = useRef<HTMLInputElement | null>(null);
    const emailEl =useRef<HTMLInputElement | null>(null);

    type Users = {
        firstName: string,
        lastName: string,
        email: string
    }

    function submit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        const data = {
            firstName: firstNameEl.current?.value,
            lastName: lastNameEl.current?.value,
            email: emailEl.current?.value
        }
        console.log(data)
        Axios.post("/quantity-authentication/user/register", {
            ...data
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
                <input type="text" onChange={(e) => validation(e)} id="firstName" className="form-control" placeholder="First name" ref={firstNameEl} />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" onChange={(e) => validation(e)} id="lastName" className="form-control" placeholder="Last name" ref={lastNameEl}/>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" onChange={(e) => validation(e)} id="email" className="form-control" placeholder="Enter email" ref={emailEl}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" onClick={(e) => submit(e)} className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered <a href="http://localhost">log in?</a>
            </p>
        </form>
    );
};

export default SignUp;
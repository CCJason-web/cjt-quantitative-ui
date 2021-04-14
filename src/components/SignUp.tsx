import { useState } from 'react';


function SignUp() {
    const url = "";
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    function onClickButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
    }

    function handle(event: React.ChangeEvent<HTMLInputElement>) {
        var id = event.target.getAttribute("id");
        const newdata = { ...data };
        if (id === "firstName"){
            newdata["firstName"]= event.target.value;
        }else if(id === "lastName"){
            newdata["lastName"]= event.target.value;
        }else if(id === "email"){
            newdata["email"]= event.target.value;
        }
        setData(newdata)
    }

    return (
        <form>
            <h3>Register</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" onChange={(e) => handle(e)} id="firstName" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" onChange={(e) => handle(e)} id="lastName" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" onChange={(e) => handle(e)} id="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" onClick={e => onClickButton(e)} className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered <a href="http://localhost">log in?</a>
            </p>
        </form>
    );
};

export default SignUp;
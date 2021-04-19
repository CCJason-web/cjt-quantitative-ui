import { useState, useRef } from 'react';
import Axios from 'axios';
import { Form } from 'react-bootstrap';

function SignUp() {
    const [formIsValid, setFormIsValid] = useState(false);

    const firstNameEl = useRef<HTMLInputElement | null>(null);
    const lastNameEl = useRef<HTMLInputElement | null>(null);
    const emailEl = useRef<HTMLInputElement | null>(null);
    const [formValid, setFormValid] = useState<FormValidType>({
       
        firstNameIsValid: false,
        lastNameIsValid: false,
        emailIsValid: false
    });
    const [formErrors, setformErrors] = useState<FormErrorType>(
        { emailError: "", firstNameError: "", lastNameError: "" }
    );

    type FormValidType = {
        
        firstNameIsValid: boolean,
        lastNameIsValid: boolean,
        emailIsValid: boolean,
    }

    type FormErrorType = {
        emailError: string, firstNameError: string, lastNameError: string
    }

    function submit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        const data = {
            firstName: firstNameEl.current?.value,
            lastName: lastNameEl.current?.value,
            email: emailEl.current?.value
        }
        Axios.post("/quantity-authentication/user/register", {
            ...data
        });
    }

    function checkEmail(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        const data = {
            email: emailEl.current?.value
        }
        Axios.post("", {
            email: data.email
        });
    }

    function singleValueValidation(event: any) {
        let emailValid;
        let firstNamelValid;
        let lastNameValid;
        var id = event.target.getAttribute("id");
        var pattern = new RegExp(".+@.+\.[A-Za-z]+$");
        var inputValue = event.target.value;
        var dataErrors = {
            ...formErrors
        }
        var dataValid = {
            ...formValid
        }
        switch (id) {
            case "firstName":
                firstNamelValid = inputValue.toString().length > 0;
                dataErrors.firstNameError = firstNamelValid ? "" : "first name could not be empty";
                dataValid.firstNameIsValid = firstNamelValid;
                break;
            case "lastName":
                lastNameValid = inputValue.toString().length > 0;
                dataErrors.lastNameError = lastNameValid ? "" : "last name could not be empty";
                dataValid.lastNameIsValid = lastNameValid;
                break;
            case "email":
                emailValid = pattern.test(inputValue || "");
                dataErrors.emailError = emailValid ? "" : " email is invalid";
                dataValid.emailIsValid = emailValid;
                break;
            default:
                break;
        }

        setformErrors(dataErrors);
        setFormValid(dataValid);
        setFormIsValid(validateForm(dataValid.firstNameIsValid, dataValid.lastNameIsValid, dataValid.emailIsValid));
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
        }


    };

    function validateForm(firstNameIsValid: boolean, lastNameIsValid: boolean, emailIsValid: boolean) {
        console.log(emailIsValid && firstNameIsValid && lastNameIsValid)
        return emailIsValid && firstNameIsValid && lastNameIsValid;
    }

    return (
        <Form noValidate validated={formIsValid} onSubmit={(e) => handleSubmit(e)}>
            <h3>Register</h3>
            <Form.Group >
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    id="firstName"
                    onChange={(e) => singleValueValidation(e)}
                    type="text"
                    placeholder="First name"
                    className={formErrors.firstNameError.length > 0 ? "is-invalid" : ""}
                    ref={firstNameEl}
                />
                {formErrors.firstNameError.length > 0 && (
                    <span className="text-danger">{formErrors.firstNameError}</span>
                )}
            </Form.Group>
            <Form.Group >
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    required
                    id="lastName"
                    onChange={(e) => singleValueValidation(e)}
                    type="text"
                    placeholder="Last name"
                    ref={lastNameEl}
                />
                {formErrors.lastNameError.length > 0 && (
                    <span className="text-danger">{formErrors.lastNameError}</span>
                )}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <div className="form-inline">
                    <input type="email" onBlur={(e) => singleValueValidation(e)} id="email" className={"form-control " + (formErrors.emailError.length > 0 ? "is-invalid" : "")} placeholder="Enter email" ref={emailEl} required />
                    <button className="btn btn-dark" onClick={e => checkEmail(e)}>Check Email</button>
                </div>
                {formErrors.emailError.length > 0 && (
                    <span className="text-danger">{formErrors.emailError}</span>
                )}
            </Form.Group >

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <input name="password" type="password" className="form-control" placeholder="Enter password" />
            </Form.Group >

            <button type="submit" onClick={(e) => submit(e)} className="btn btn-danger btn-lg btn-block" disabled={!formIsValid}>Register</button>
            <p className="forgot-password text-right">
                Already registered <a href="http://localhost">log in?</a>
            </p>
        </Form>
    );
};

export default SignUp;
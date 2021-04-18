import { useState, useRef } from 'react';
import Axios from 'axios';
import { Form } from 'react-bootstrap';

function SignUp() {
    const [formIsValid, setFormIsValid] = useState(false);

    const firstNameEl = useRef<HTMLInputElement | null>(null);
    const lastNameEl = useRef<HTMLInputElement | null>(null);
    const emailEl = useRef<HTMLInputElement | null>(null);
    const [validationData, setValidationData] = useState<Validation>({
        firstName: "",
        lastName: "",
        email: "",
        formErrors: { email: "", firstName: "", lastName: "" },
        emailIsValid: false,
        firstNameIsValid: false,
        lastNameIsValid: false
    });

    type Validation = {
        firstName: string,
        lastName: string,
        email: string,
        formErrors: { email: string, firstName: string, lastName: string },
        emailIsValid: boolean,
        firstNameIsValid: boolean,
        lastNameIsValid: boolean
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
        var id = event.target.getAttribute("id");
        let data: Validation;
        var pattern = new RegExp(".+@.+\.[A-Za-z]+$");
        data = {
            firstName: "",
            lastName: "",
            email: "",
            formErrors: { email: "", firstName: "", lastName: "" },
            emailIsValid: false,
            firstNameIsValid: false,
            lastNameIsValid: false
        }
        switch (id) {
            case "firstName":
                break;
            case "lastName":
                break;
            case "email":
                emailValid = pattern.test(event.target.value || "");
                data.formErrors.email = emailValid ? "" : " is invalid";
                console.log(data.formErrors.email)
                break;
            default:
                break;
        }
        setValidationData(data);
        setFormIsValid(validateForm);
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setFormIsValid(true);
            event.preventDefault();
        }


    };

    function validateForm() {
        return validationData.emailIsValid && validationData.firstNameIsValid && validationData.lastNameIsValid;
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
                    ref={firstNameEl}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group >
                <Form.Label>Email</Form.Label>
                <div className="form-inline">
                    <input type="email" onBlur={(e) => singleValueValidation(e)} id="email" className="form-control" placeholder="Enter email" ref={emailEl} required />
                    <button className="btn btn-dark" onClick={e => checkEmail(e)}>Check Email</button>
                </div>
                {validationData.formErrors.email.length > 0 && (
                    <span className="text-danger">{validationData.formErrors.email}</span>
                )}
            </Form.Group >

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <input name="password" type="password" className="form-control" placeholder="Enter password" />
            </Form.Group >

            <button type="submit" onClick={(e) => submit(e)} className="btn btn-danger btn-lg btn-block" disabled={formIsValid}>Register</button>
            <p className="forgot-password text-right">
                Already registered <a href="http://localhost">log in?</a>
            </p>
        </Form>
    );
};

export default SignUp;
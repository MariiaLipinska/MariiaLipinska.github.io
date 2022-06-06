
import React from "react";
import "rsuite/dist/rsuite.min.css";
import {Button, Form, InputNumber, Schema} from "rsuite";
import { useEffect, useRef, useState } from "react";
import {Field} from "./rsuite";
import classes from "./rsuite-login-form.module.css"


const RsuiteLoginForm =()=>{
    const {StringType} = Schema.Types;
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        name: "",
        email:''
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        console.log("formValue", formValue)
    };
    const model = Schema.Model({
        name: StringType()
            .minLength(2, 'Please enter more then 2 letters.')
            .isRequired('This field is required.')
            .minLength(2, 'Please select at least 2 types of Skills.'),
        email:StringType()
            .isEmail('This field is email.')
            .isRequired('This field is required.')
    });
    return (
        <div className={classes.container}>
            <h1>Log In</h1>
            <Form
                ref={formRef}
                formValue={formValue}
                onChange={setFormValue}
                onCheck={setFormError}
                formError={formError}
                model={model}
            >
                <Field name="name" label="Your name"/>
                <Field name="email" label="Your email"/>
                <Form.Group>
                    <Button className={classes.signInButton} appearance="primary" onClick={handleSubmit}>
                        Sign In
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default RsuiteLoginForm
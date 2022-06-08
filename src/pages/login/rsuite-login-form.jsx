import "rsuite/dist/rsuite.min.css";
import React from "react";
import {useState, useRef} from "react";
import {FlexboxGrid, Form, Schema, Button, ButtonToolbar} from "rsuite";
import {TextField} from "./rsuite-component";
import JSONView from "react";
import classes from "./rsuite-login-form.module.css"

const SignUp = () => {
    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: '',
    });
    const { StringType, NumberType } = Schema.Types;

    const model = Schema.Model({

        email: StringType()
            .isEmail('Please enter a valid email address.')
            .isRequired('This field is required.'),

        password: StringType().isRequired('This field is required.'),
    });
    const handleSubmit = () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }
        console.log(formValue, 'Form Value');
    };


    return (
        <FlexboxGrid>
            <FlexboxGrid.Item colspan={12}>
                <Form
                    ref={formRef}
                    onChange={setFormValue}
                    onCheck={setFormError}
                    formValue={formValue}
                    model={model}
                >

                    <TextField name="email" label="Email" />
                    <TextField name="password" label="Password" type="password" autoComplete="off" />
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </ButtonToolbar>
                </Form>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
};
export default SignUp
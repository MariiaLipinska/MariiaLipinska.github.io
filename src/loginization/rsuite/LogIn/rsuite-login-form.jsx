
import "rsuite/dist/rsuite.min.css";
import React, {useEffect} from "react";
import {FlexboxGrid, Form, Schema, Button, ButtonToolbar} from "rsuite";

import classes from "./rsuite-login-form.module.css"
import {TextField} from "../rsuite";
import {useDispatch} from "react-redux";
import {checkUser} from "../../../redux/ActionCreator/actionUsers";

const RsuiteLoginForm = () => {

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
//     const dispatch = useDispatch()
// const getAdminThunk = () => dispatch(checkUser)
//     useEffect(()=>{
//             getAdminThunk()
//         },[]
//     )
    // const handleChange = () => {
    //     if()
    // }

    return (
        <div className={classes.container}>
            <h1 className={classes.header}>Log In</h1>
        <FlexboxGrid>
            <FlexboxGrid.Item colspan={12}>
                <Form
                    ref={formRef}
                    onChange={setFormValue}
                    onCheck={setFormError}
                    formValue={formValue}
                    model={model}
                >

                    <TextField name="email" label="Email" placeholder="Please, enter email" className={classes.field}/>
                    <TextField name="password" label="Password" type="password" placeholder="Please, enter password" autoComplete="off" className={classes.field}/>
                    <ButtonToolbar>
                        <Button className={classes.signInButton} appearance="primary" onClick={handleSubmit} >
                            Sign in
                        </Button>
                    </ButtonToolbar>
                </Form>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    </div>
    );
};

export default RsuiteLoginForm
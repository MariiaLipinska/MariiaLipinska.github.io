import "rsuite/dist/rsuite.min.css";
import React, {useEffect, useState} from "react";
import {FlexboxGrid, Form, Schema, Button, ButtonToolbar} from "rsuite";
import {useNavigate} from "react-router-dom"
import classes from "./rsuite-login-form.module.css"
import {TextField} from "../rsuite";
import {collection, onSnapshot} from "firebase/firestore";
import db from "../../../firebase";
import {RouteConst} from "../../../common/RouteConst";
import {useDispatch} from "react-redux";
import {actionsUsers} from "../../../redux/ActionCreator/actionUsers";


const RsuiteLoginForm = () => {
    const [admin, setAdmin] = useState();
    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch()
    const {StringType, NumberType} = Schema.Types;

    const model = Schema.Model({

        email: StringType()
            .isEmail('Please enter a valid email address.')
            .isRequired('This field is required.'),

        password: StringType().isRequired('This field is required.'),
    });
    useEffect(()=>{
        admin?.role === "admin" && console.log(admin)
    },[admin])
    const navigate = useNavigate()
    useEffect(() => {
        if(admin?.role === "admin"){
            localStorage.setItem("user", JSON.stringify(admin))
            navigate(RouteConst.ADMIN)
        }
    }, [admin]);
    const handleSubmit = () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }
        dispatch(actionsUsers.setAdmin(true))
        localStorage.setItem("admin", JSON.stringify(true))
        //
        let users;
        const collectionRef = collection(db, "user");
        onSnapshot(collectionRef, (snapshot) => {
            users = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }))
            console.log(users)
            if (users[1].email === formValue.email && users[1].password === formValue.password) {
                localStorage.setItem("user", JSON.stringify(users[1]));
                navigate(RouteConst.ADMIN)

            } else {
                navigate(RouteConst.NOT_FOUND_PAGE)
            }
            console.log(formValue, 'Form Value');
        })
    }

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

                        <TextField name="email" label="Email" placeholder="Please, enter email"
                                   className={classes.field}/>
                        <TextField name="password" label="Password" type="password" placeholder="Please, enter password"
                                   autoComplete="off" className={classes.field}/>
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
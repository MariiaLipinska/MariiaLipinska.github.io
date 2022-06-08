// import React from "react";
// import "rsuite/dist/rsuite.min.css";
// import classes from "./signUpForm.module.css";
// import {FlexboxGrid, Form, Schema, Button, ButtonToolbar} from "rsuite";
// import {TextField} from "./rsuite-component";
// import JSONView from "react";
//
//
//
// const SignUpForm = () => {
//     const formRef = React.useRef();
//     const [formError, setFormError] = React.useState({});
//     const [formValue, setFormValue] = React.useState({
//         name: '',
//         email: '',
//         age: '',
//         password: '',
//         verifyPassword: ''
//     });
//     const { StringType, NumberType } = Schema.Types;
//
//     const model = Schema.Model({
//         name: StringType().isRequired('This field is required.'),
//         email: StringType()
//             .isEmail('Please enter a valid email address.')
//             .isRequired('This field is required.'),
//         age: NumberType('Please enter a valid number.').range(
//             18,
//             30,
//             'Please enter a number from 18 to 30'
//         ),
//         password: StringType().isRequired('This field is required.'),
//         verifyPassword: StringType()
//             .addRule((value, data) => {
//                 console.log(data);
//
//                 if (value !== data.password) {
//                     return false;
//                 }
//
//                 return true;
//             }, 'The two passwords do not match')
//             .isRequired('This field is required.')
//     });
//
//     const handleSubmit = () => {
//         if (!formRef.current.check()) {
//             console.error('Form Error');
//             return;
//         }
//         console.log(formValue, 'Form Value');
//     };
//
//     const handleCheckEmail = () => {
//         formRef.current.checkForField('email', checkResult => {
//             console.log(checkResult);
//         });
//     };
//
//     return (
//         <FlexboxGrid>
//             <FlexboxGrid.Item colspan={12}>
//                 <Form
//                     ref={formRef}
//                     onChange={setFormValue}
//                     onCheck={setFormError}
//                     formValue={formValue}
//                     model={model}
//                 >
//                     <TextField name="name" label="Username" />
//                     <TextField name="email" label="Email" />
//                     <TextField name="age" label="Age" />
//                     <TextField name="password" label="Password" type="password" autoComplete="off" />
//                     <TextField
//                         name="verifyPassword"
//                         label="Verify password"
//                         type="password"
//                         autoComplete="off"
//                     />
//
//                     <ButtonToolbar>
//                         <Button appearance="primary" onClick={handleSubmit}>
//                             Submit
//                         </Button>
//
//                         <Button onClick={handleCheckEmail}>Check Email</Button>
//                     </ButtonToolbar>
//                 </Form>
//             </FlexboxGrid.Item>
//             <FlexboxGrid.Item colspan={12}>
//                 <JSONView formValue={formValue} formError={formError} />
//             </FlexboxGrid.Item>
//         </FlexboxGrid>
//     );
// };
// export default SignUpForm
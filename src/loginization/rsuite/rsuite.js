// import { Form } from "rsuite";
// import { forwardRef } from "react";
//
// export const Field = forwardRef((props, ref) => {
//     const { name, message, label, accepter, error, ...rest } = props;
//     return (
//         <Form.Group controlId={`${name}-10`} ref={ref} className={error ? 'has-error' : ''}>
//             <Form.ControlLabel>{label} </Form.ControlLabel>
//             <Form.Control name={name} accepter={accepter} errorMessage={error} {...rest} />
//             {/*<Form.HelpText>{message}</Form.HelpText>*/}
//         </Form.Group>
//     );
// });
import React from "react";
import { Form } from 'rsuite';



export const TextField = React.forwardRef((props, ref) => {
    const { name, label, accepter, ...rest } = props;
    return (
        <Form.Group controlId={`${name}-4`} ref={ref}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
});
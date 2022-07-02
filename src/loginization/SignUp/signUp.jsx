import React, { useState, useEffect } from "react";
import "rsuite/dist/rsuite.min.css";
import { useTransition, animated } from '@react-spring/web';
import classes from "./signUp.module.css";
import img from "./image/img.png";
import img_2 from "./image/img_2.png";
import img_3 from "./image/img_3.png";

   //  const slides = [
   //      <img src={img} alt=""/>,
   //      <img src={img_2} alt=""/>,
   //      <img src={img_3} alt=""/>
   // ]

const SignUp = ()=>{
    // const [index, set] = useState(0)
    // const transitions = useTransition(index, {
    //     key: index,
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    //     config: { duration: 3000 },
    //     onRest: (_a, _b, item) => {
    //         if (index === item) {
    //             set(state => (state + 1) % slides.length)
    //         }
    //     },
    //     exitBeforeEnter: true,
    // })

    return(

        <div className={classes.container}>
            {/*<div>*/}
            {/*    {transitions((style, i) => (*/}
            {/*        <animated.div*/}
            {/*            className={classes.bg}*/}
            {/*            style={{*/}
            {/*                ...style,*/}
            {/*                backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,*/}
            {/*            }}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}
            <a href="#">
            <img src={img} alt="time"/>
                <div className={classes.statement}>
                    <h1 className={classes.text}>Welcome to login!</h1>
                    <h3 className={classes.question}>If email and password are not correct, admin page will be not available</h3>
                </div>
            </a>
            )
        }
        </div>
    )
}

export default SignUp
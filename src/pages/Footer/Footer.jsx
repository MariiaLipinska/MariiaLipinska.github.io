import React from 'react'
import classes from './Footer.module.css'


const Footer = () => {

        // function mouseMove(e){
        //     document.querySelector(".link").style.color = "white";
        // }

    return (
        <footer className={classes.container}>
            <div className={classes.footerMenu}>
                <div className={classes.footerName}> Contacts</div>
                <div className={classes.footerContacts}>
                    <p><a href="mailto:marialipinska501@gmail.com" className={classes.link} >Email: marialipinska501@gmail.com</a></p>
                    <p><a href="tel:+380981249203" className={classes.link} >Phone number: +380981249203</a></p>
                    <p><a href="https://www.linkedin.com/in/mariia-lipinska-128b07243/" target="_blank" className={classes.link} >LinkedIn: Mariia Lipinska</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
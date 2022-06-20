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
                    <p><a href="mailto:lipa50196@i.ua" className={classes.link} >Email: lipa50196@i.ua</a></p>
                    <p><a href="tel:+380981249203" className={classes.link} >Phone number: +380981249203</a></p>
                    <p><a href="https://www.facebook.com/profile.php?id=100011220823027" target="_blank" className={classes.link} >Facebook: Mariia Lipinska</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
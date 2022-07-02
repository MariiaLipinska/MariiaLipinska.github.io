import classes from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    return (
        <div className={classes.container}>
            <span className={classes. text1}>Page not found</span>
            <span className={classes. text2}>Please, log in!</span>
        </div>
    );
};

export default NotFoundPage;
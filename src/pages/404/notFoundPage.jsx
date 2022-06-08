import classes from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    return (
        <div className={classes.container}>
            <h1>Page not found</h1>
            <h2>Please, log in!</h2>
        </div>
    );
};

export default NotFoundPage;
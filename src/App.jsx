import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter, Route, Routes, useLocation, Switch} from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import MainPage from "./pages/mainPage/MainPage";
import SignUp from "./loginization/SignUp/signUp";
import Header from "./pages/Header/Header";
import {RouteConst} from "./common/RouteConst";
import PrivateRoute from "./HOC/PrivateRoute";
import AdminPage from "./pages/AdminPage/AdminPage";
import LoginContainer from "./loginization/login-container";
import NotFoundPage from "./pages/404/notFoundPage";
import {Provider} from "react-redux";
import store from "./redux/store";
import Footer from "./pages/Footer/Footer";
import {useTransition, animated} from 'react-spring'


const App = () => {
    const [admin, setAdmin] = useState("")
    const path = useLocation().pathname;
    const location = useLocation();
    console.log(location);
    console.log(store.getState())
    const transition = useTransition(location, {
        from: {
            opacity: 0,
            transform: 'translateX(100%)',
            delay: '1000'
        },
        enter: {
            opacity: 1,
            transform: 'translateX(0%)'
        },
        leave: {
            opacity: 0,
            transform: 'translateX(-100%)'
        }

    })
    const showNavbar = () => {
        switch (path) {
            case RouteConst.LOGIN:
            case RouteConst.NOT_FOUND_PAGE:
                return false;
            default:
                return true;
        }
    };
    const showFooter = () => {
        switch (path) {
            case RouteConst.LOGIN:
            case RouteConst.NOT_FOUND_PAGE:
                return false;
            default:
                return true;
        }
    };
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    return (
        <div className="App">
            <div className="app-wrapper">
                <Header/>
                {showNavbar() && <Navbar/>}
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={RouteConst.MAIN} element={<MainPage/>}/>
                        <Route path={RouteConst.LOGIN} element={<LoginContainer/>}/>
                        <Route element={<PrivateRoute isAllowed={user?.role==="admin"}/>}>
                            <Route path={RouteConst.ADMIN} element={<AdminPage />} />
                        </Route>
                        <Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />} />
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Routes>



                    {/*{transition((item, props) => (*/}
                    {/*    <animated.div style={props}>*/}
                    {/*        <div style={{position: 'absolute', width: '100%'}}>*/}
                    {/*            <Routes location={item}>*/}
                    {/*                <Route exact path={RouteConst.MAIN} element={<MainPage/>}/>*/}
                    {/*                <Route exact path={RouteConst.LOGIN} element={<LoginContainer/>}/>*/}
                    {/*                <Route element={<PrivateRoute isAllowed={user?.role === "admin"}/>}>*/}
                    {/*                    <Route exact path={RouteConst.ADMIN} element={<AdminPage/>}/>*/}
                    {/*                </Route>*/}
                    {/*                <Route exact path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage/>}/>*/}
                    {/*                <Route exact path={"*"} element={<NotFoundPage/>}/>*/}

                    {/*            </Routes>*/}
                    {/*        </div>*/}
                    {/*    </animated.div>*/}
                    {/*))}*/}

                </div>
                {showFooter() && <Footer/>}
            </div>
        </div>
    );
}
const AppContainer = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
export default AppContainer;

import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import MainPage from "./pages/mainPage/MainPage";
import SignUp from "./pages/login/rsuite-login-form";
import Header from "./pages/Header/Header";
import {RouteConst} from "./common/RouteConst";
import PrivateRoute from "./HOC/PrivateRoute";
import AdminPage from "./pages/AdminPage/AdminPage";
import LoginContainer from "./loginization/login-container";
import NotFoundPage from "./pages/404/notFoundPage";
import {Provider} from "react-redux";
import store from "./redux/store";


const App = () => {
    const path = useLocation().pathname;
    const showNavbar = () => {
        switch (path) {
            case RouteConst.LOGIN:
            case RouteConst.NOT_FOUND_PAGE:
                return false;
            default:
                return true;
        }
    };
    useEffect(() => {
      localStorage.setItem("user", JSON.stringify({ role: "user" }));
    }, []);

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    // const user = { role: "user" };
    // console.log(user);
    return (
        <div className="App">
        <div className="app-wrapper">
            <Header/>
            {showNavbar() && <Navbar/>}
            <div className="app-wrapper-content">
            <Routes>
                <Route path={RouteConst.MAIN} element={<MainPage/>}/>
                <Route path={RouteConst.LOGIN} element={<LoginContainer/>}/>
                {/*<Route path={"/login"} element={<SignUp/>}/>*/}
                <Route element={<PrivateRoute isAllowed={user?.role==="admin"}/>}>
                    <Route path={RouteConst.ADMIN} element={<AdminPage />} />
                </Route>
                <Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />} />
            </Routes>
            </div>
            {/*<LoginContainer/>*/}
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

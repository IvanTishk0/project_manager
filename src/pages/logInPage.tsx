import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LogInForm.css';
import LoginForm from "../components/loginForm.tsx";
import NonFuncNavbar from "../components/nonFuncNavbar.tsx";

const LogInPage: React.FC = () => {
    return (
        <div className="App">
            <NonFuncNavbar/>
            <div className="d-flex justify-content-center mt-5">
                <LoginForm/>
            </div>
        </div>
    );
};

export default LogInPage;
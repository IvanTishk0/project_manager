import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/RegistrationForm.css';
import RegFrom from "../components/regFrom.tsx";
import NonFuncNavbar from "../components/nonFuncNavbar.tsx";

const RegistrationPage: React.FC = () => {
    return (
        <div className="App">
            <NonFuncNavbar/>
            <div className="d-flex justify-content-center mt-5">
                <RegFrom/>
            </div>

        </div>
    )
};

export default RegistrationPage;
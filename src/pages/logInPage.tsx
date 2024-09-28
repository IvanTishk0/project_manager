import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LogInForm.css';
import LoginForm from "../components/loginForm.tsx";
import NonFuncNavbar from "../components/nonFuncNavbar.tsx";

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

// LogInPage принимает props
interface LogInPageProps {
    userData: User[];
}

const LogInPage: React.FC<LogInPageProps> = ({ userData }) => {
    return (
        <div className="App">
            <NonFuncNavbar />
            <div className="d-flex justify-content-center mt-5">
                <LoginForm userData={userData} />
            </div>
        </div>
    );
};

export default LogInPage;
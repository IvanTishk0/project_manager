import React from 'react';
import NonFuncNavbar from "../components/nonFuncNavbar.tsx";
import InfoCard from "../components/infoCard.tsx";

const HelloPage: React.FC = () => {
    return (
        <div className="App  w-100">
            <NonFuncNavbar/>
            <InfoCard/>
        </div>
    );
};

export default HelloPage;
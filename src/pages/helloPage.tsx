import React from 'react';
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';
import {Button, Card, Container, Navbar} from "react-bootstrap";
import NonFuncNavbar from "../components/nonFuncNavbar.tsx";
import InfoCard from "../components/infoCard.tsx";

const HelloPage = () => {
    return (
        <div className="App  w-100">
            <NonFuncNavbar/>
            <InfoCard/>
        </div>
    );
};

export default HelloPage;
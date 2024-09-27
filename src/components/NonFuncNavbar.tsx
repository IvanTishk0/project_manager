import {Component} from 'react';
import {Navbar} from "react-bootstrap";
import Icon from '@mdi/react';
import { mdiArchive } from '@mdi/js';

class NonFuncNavbar extends Component {
    render() {
        return (
            <Navbar
                bg="dark" variant="dark" className="navbar d-flex align-items-center p-1"
            >
                <Icon path={mdiArchive} size={1} />
                <Navbar.Brand
                    className="mx-2"
                    href=""
                >
                    PROJECT <span className="">4617</span>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default NonFuncNavbar;
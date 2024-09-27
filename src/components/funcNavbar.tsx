import React, {useState} from 'react';
import Icon from "@mdi/react";
import {mdiMenu, mdiPlus} from "@mdi/js";
import {Button, ListGroup, Navbar, Offcanvas} from "react-bootstrap";

const FuncNavbar = () => {
    const [show, setShow] = useState(false);
    const [projects, setProjects] = useState([
        {id: 1, name: 'project 1'},
        {id: 2, name: 'project 2'},
        {id: 3, name: 'project 3'},
        {id: 4, name: 'project 3'}
    ]);
    const handleClose = () => {
        // e.preventDefault();
        setShow(false);
    }
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
    }

    let counterid = 0
    return (
        <Navbar
            bg="dark"
            variant="dark"
            className="navbar d-flex align-items-center p-1 justify-content-between"
        >
            <div>

                    <Navbar.Brand
                        className="mx-2 d-flex align-items-center"
                        href=""
                    >
                        <Button
                            onClick={handleShow}
                            className="rounded-5"
                            variant="dark"
                            href=""
                        >

                            <Icon path={mdiMenu} size={1} />
                        </Button>

                        PROJECT 4617
                    </Navbar.Brand>
            </div>
            <div>
                <Button
                    className="rounded-5 m-2"
                    variant="dark"
                    href=""
                >

                    <Icon path={mdiPlus} size={1} />
                    создать
                </Button>
                <Button
                    className="rounded-3 m-2"
                    variant="outline-light"
                    href=""
                >

                    выйти
                </Button>
            </div>
            <Offcanvas className=" offcanvas__border bg-dark text-light" show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <Offcanvas.Title >Список проектов</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {projects.map(project =>
                        <ListGroup
                            defaultActiveKey=""
                            className="bg-dark text-light d-flex justify-content-center align-items-center"
                        >
                            <ListGroup.Item
                                action href=""
                                className="offcanvas__btn bg-dark text-light m-2 text-center"
                            >
                                {project.name}
                            </ListGroup.Item>
                        </ListGroup>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>

    );
};

export default FuncNavbar;
import React from 'react';
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';
import {Button, Card, Container, Navbar} from "react-bootstrap";
import NonFuncNavbar from "../components/nonFuncNavbar.tsx";

const HelloPage = () => {
    return (
        <div className="App  w-100">
            <NonFuncNavbar/>
            <Container
                className="mt-5 d-flex justify-content-center align-items-center "
            >
                <Card
                    className="crad bg-dark text-light w-50 p-3 rounded-3"
                >
                    <Card.Body
                        className="text-center "
                    >
                        <Card.Title
                            className="text-uppercase fs-2"
                        >
                            Добро пожаловать!
                        </Card.Title>
                        <Card.Text
                            className="fw-normal lh-base"
                        >
                            Это сайт созданный командой 4617, в котором можно управлять проектами,
                            есть функционал работы с задачами и пользователями
                        </Card.Text>

                    </Card.Body>
                    <Container className="mt-5 d-flex justify-content-between align-items-center">
                        <Button
                            className="w-50 rounded-3 mx-2"
                            variant="outline-light" >
                            Войти
                            {/*<Icon*/}
                            {/*    className="pl-10"*/}
                            {/*    path={mdiAccountPlus}*/}
                            {/*    size={1} />*/}
                        </Button>
                        <Button
                            className="w-50 rounded-3 mx-2"
                            variant="outline-light"
                        >
                            Регистрация
                        </Button>
                    </Container>
                </Card>
            </Container>

        </div>
    );
};

export default HelloPage;
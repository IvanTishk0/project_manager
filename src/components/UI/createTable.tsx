import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

const CreateTable = (props) => {
    return (
        <Modal

            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="bg-dark text-light" closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Создайте таблицу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-light text-center">
                <Form>
                    <Form.Group controlId="formUsername">
                        <Form.Control
                            type="text"
                            name="name"
                            // value={}
                            // onChange={}
                            placeholder="Введите имя таблицы"
                            required
                        />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer className="bg-dark text-light">
                <Button
                    onClick={props.onHide}
                    variant="outline-light"
                >
                    Создать
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTable;
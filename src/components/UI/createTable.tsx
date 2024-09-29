import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';


const CreateTable = ({ show, onHide, addProject }) => {

    const [tableName, setTableName] = useState('');
    const [tableBody, setTableBody] = useState('');

    const handleCreate = () => {

        addProject(tableName, tableBody);
        setTableName('');
        setTableBody('');
        onHide();
        setRows(1);
    };

    const [rows, setRows] = useState(1);

    const handleInput = (event) => {
        const textareaLineHeight = 24;
        const previousRows = event.target.rows;
        event.target.rows = 1;

        const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

        setRows(currentRows);
    };

    return (
        <Modal

            show={show}
            onHide={onHide}
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
                            value={tableName}
                            onChange={(e) => setTableName(e.target.value)}
                            placeholder="Введите имя таблицы"
                            required
                        />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            as="textarea"
                            rows={rows}
                            onInput={handleInput}
                            style={{ resize: 'none' }}
                            value={tableBody}
                            onChange={(e) => setTableBody(e.target.value)}
                            placeholder="Введите описание таблицы"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-light">
                <Button
                    onClick={handleCreate}
                    variant="outline-light"
                >
                    Создать
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTable;
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LogInForm.css';

const LogInForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [passwordError, setPasswordError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Имитация проверки пароля с данными "базы данных"
        const mockPasswordFromDB = 'securepassword123';  // Пример пароля из "базы данных"

        if (formData.password !== mockPasswordFromDB) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
            console.log(formData);
            // Реализация отправки данных на сервер
        }
    };

    return (
        <Container className="login-form-container bg-dark">
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email адрес</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Введите email"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Введите пароль"
                        required
                        className={passwordError ? 'is-invalid' : ''}
                    />
                    {passwordError && <div className="invalid-feedback">Неверный пароль.</div>}
                </Form.Group>

                <Button className="submit-button rounded-3" variant="dark" type="submit">
                    Авторизироваться
                </Button>
            </Form>
            <p className="link-text">Еще нет аккаунта? <a href="#">Зарегистрируйтесь</a></p>
        </Container>
    );
};

export default LogInForm;
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/RegistrationForm.css';

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });


    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [emailExists, setEmailExists] = useState(false);
    const [loading, setLoading] = useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });

            // Проверка совпадения паролей при вводе
            if (name === 'confirmPassword') {
                setPasswordsMatch(value === formData.password);
            }

            // Если почта изменяется, проверяем её на существование
            if (name === 'email') {
                checkEmailExists(value);
            }
        };

        const checkEmailExists = async (email: string) => {
            if (email) {
                setLoading(true);
                try {
                    const response = await fetch(`/api/check-email?email=${encodeURIComponent(email)}`, {
                        method: 'GET',
                    });

                    // Предполагается, что сервер возвращает объект с полем exists
                    const data = await response.json();
                    setEmailExists(data.exists);
                } catch (error) {
                    console.error('Ошибка при проверке почты:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setEmailExists(false);
            }
        };

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            // Добавьте логику для отправки формы, если пароли совпадают и email не существует
        };

    return (
        <Container className="registration-form-container bg-dark">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Введите имя пользователя"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email адрес</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Введите email"
                        required
                        isInvalid={emailExists}
                    />
                    {emailExists && (
                        <Form.Control.Feedback type="invalid">
                            Этот адрес электронной почты уже существует.
                        </Form.Control.Feedback>
                    )}
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
                    />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Подтвердите пароль</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Подтвердите пароль"
                        className={!passwordsMatch ? 'is-invalid' : ''}
                        required
                    />
                    {!passwordsMatch && (
                        <Form.Control.Feedback type="invalid">
                            Пароли не совпадают
                        </Form.Control.Feedback>
                    )}
                </Form.Group>

                <Button disabled={loading || emailExists || !passwordsMatch} className="submit-button rounded-3"
                        variant="dark" type="submit">
                    Зарегистрироваться
                </Button>
                <p className="link-text">Уже есть аккаунт? <a href="#">Aвторизируйтесь</a></p>
            </Form>
        </Container>
    );
};

export default RegistrationForm;
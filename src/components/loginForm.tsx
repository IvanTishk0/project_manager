import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface LoginFormProps {
    userData: User[];
}

const LoginForm: React.FC<LoginFormProps> = ({ userData }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = userData.find(
            (user) => user.email === formData.email && user.password === formData.password
        );

        if (user) {
            // Если пользователь найден, перенаправляем на следующую страницу
            setPasswordError(false);
            navigate('/user'); // Здесь может быть любая страница
        } else {
            // Если логин или пароль неверные, выводим сообщение об ошибке
            setPasswordError(true);
        }
    };

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        navigate('/registration'); // Переход на страницу "About"
    };

    return (
        <Container className="login-form-container bg-dark text-white">
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
                    {passwordError && <div className="invalid-feedback">Неверные email или пароль.</div>}
                </Form.Group>

                <Button className="submit-button rounded-3"
                        variant="dark"
                        type="submit"
                >
                    Авторизироваться
                </Button>
            </Form>
            <p className="link-text">Еще нет аккаунта? <a href="/registration" onClick={handleNavigation}>Зарегистрируйтесь</a></p>
        </Container>
    );
};

export default LoginForm;
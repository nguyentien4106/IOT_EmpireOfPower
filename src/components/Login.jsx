import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { isAuth, setSession } from '../helper/utils';
import { useNavigate } from 'react-router-dom';
import { MQTT } from '../constants/mqtt';
import Loading from '../shared/Loading';

export default function Login() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(isAuth() === "true")
    const [isLoading, setIsLoading] = useState(false)
    const [message, contextHolder] = message.useMessage();
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        if(auth) {
            setSession("isAuth", "true")
            navigate('/status')
        }
    }, [auth])

    const handleLogin = () => {
        setIsLoading(true)
        MQTT.login(user.username, user.password).then(res => {
            setAuth(res) 
        }).catch(e => {
            message.error("Login Failed! Please check your username and password")
        }).finally(() => setIsLoading(false))
    }

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <>
            {
                contextHolder
            }
            {
                isLoading && <Loading/>
            }
            <Form
                className='login'
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={handleLogin}
                autoComplete="off"
            >
                <Form.Item style={{textAlign: "center"}}>
                    <h1>Login</h1>
                </Form.Item>
                <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                <Input name='username' onChange={handleChange}/>
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                <Input.Password name='password' onChange={handleChange}/>
                </Form.Item>

                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>

        </>
    )
}

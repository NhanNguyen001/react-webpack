import React from 'react';

import { Button, Checkbox, Form, Input, Col, Row } from 'antd';

import "./index.scss";

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ minHeight: '100vh' }}
            className='wrapper'
        >
            <Col>
                <Form
                    className='form-container'
                    name="basic"
                    // labelCol={{
                    //     span: 8,
                    // }}
                    wrapperCol={{
                        span: 24,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <p className="form-title">Welcome back</p>
                    <Form.Item
                        // label="Username"
                        name="username"
                        rules={[
                            {
                                // required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder="Company Email" />
                    </Form.Item>

                    <Form.Item
                        // label="Password"
                        name="password"
                        rules={[
                            {
                                // required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            // offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
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
            </Col>
        </Row >

    );
};

export default Login;

/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button, Card, Form, Input, message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const loginFormSubmit = async (values: any): Promise<void> => {
    try {
      const { usernmae, password } = values;
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ usernmae, password }),
        }
      );

      const json = await response.json();
      const token = await json.accessToken;
      void message.success('Login Successfully');
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem('accessToken', token);
        localStorage.getItem('accessToken');
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log('error', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          title="Login"
          style={{ width: 300, textAlign: 'center', marginTop: 150 }}
        >
          <Form name="login-form" onFinish={loginFormSubmit}>
            <Form.Item
              name="usernmae"
              rules={[
                { required: true, message: 'Please enter your username!' },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please enter your password!' },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;

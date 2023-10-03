// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import services, { API_BASE_URL } from '../../services';
// interface LoginProps {
//   onLogin: (username: string, password: string) => void;
// }

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const navigate = useNavigate();
  // const eventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(API_BASE_URL + services.login, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });
  //     if (response.ok) {
  //       console.log('login success');
  //       const data = await response.json();
  //       localStorage.setItem('accessToken', data.accessToken);
  //       navigate('/dahsboard');
  //       // onLogin(username, password);
  //     } else {
  //       console.log('Login faild');
  //     }
  //   } catch (error) {
  //     console.log('Login error', error);
  //   }
  // };
  return (
    <div>
      <br />
      <form>
        <label>Username</label>
        <input
          type="text"
          name="username"
          // onChange={(e: any) => {
          //   // setUsername(e.target.value);
          // }}
        />
        <br />
        <br />

        <label>Password</label>
        <input
          type="text"
          name="password"
          // onChange={(e) => {
          //   setPassword(e.target.value);
          // }}
        />
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

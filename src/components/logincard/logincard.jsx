import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useSignInWithEmailPassword } from "../../react-query";
import { useState } from "react";
import styles from './logincard.module.css';


const Logincard = ({ redirect }) => {

  const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
    }
  }, [isSuccess, redirect]); 

  return (
    <Form
      name="normal_login"
      className={styles.loginForm}
      form={form}
      initialValues={{
        isRemember: true,
      }}
      onFinish={onFinish}
    // onFihishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        hasFeedback
      >
        <Input
          prefix={<MailOutlined />}
          placeholder="E-Mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Link className={styles.loginForm__forgot} to={"/"}>
          Forgot password
        </Link>
        <Form.Item name="remember" valuePropName="checked" noStyle>
               <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember}>
                  Remember me
               </Checkbox>
            </Form.Item>
         </Form.Item>

      <Form.Item>
        {isLoading ? (
          <Button
            type="primary"
            htmlType="submit"
            className={styles.loginForm__button}
            loading
          >
            Log in
          </Button>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            className={styles.loginForm__button}
          >
            Log in
          </Button>
        )}
        Or <Link to={`/auth/register?redirect=${redirect}`}>register now!</Link>
        { !isError ? (
          <></>
        ) : (
          <div className={styles.loginForm__errorWrap}>
            <h3 className={styles.loginForm__errorTitle}>
              <WarningOutlined />
              {"  "}There was a problem
            </h3>
            <p className={styles.loginForm__errorMessage}>{error.response.data.detail}</p>
          </div>
        )}
      </Form.Item>
    </Form>
  );
};

export default Logincard;
// import React, { useState } from "react";
// import  "./text.css";

//  function text()
// {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label className="name">Username </label>
//           <input className="enterbar" type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label className="name">Password </label>
//           <input className="enterbar" type="password"  required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//         <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );

//     return(
//         <div className="loginpage">
//         <div className="screen" >
//       <div className="login-form">
//         <div className="title">LOGIN</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//     </div>
//       );

// }
// export default text;
import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import Button from "components/Button";
import useForm from "hooks/useForm";
import useLogin from "hooks/user/useLogin";

const Login = () => {
  const [errors, setErrors] = useState({});
  const { login, loading } = useLogin({ setErrors });

  const { onChange, onSubmit } = useForm(login, {
    username: "",
    password: "",
  });

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Username</label>
          <Form.Input
            name="username"
            error={errors?.username}
            placeholder="Username..."
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Form.Input
            type="password"
            error={errors?.password}
            placeholder="Password..."
            name="password"
            onChange={onChange}
          />
        </Form.Field>
        <div style={{ width: "20%" }}>
          <Button loading={loading} type="submit">
            Login
          </Button>
        </div>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((val) => (
              <li>{val}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Login;

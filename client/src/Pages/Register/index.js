import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import Button from "components/Button";
import useCreateUser from "hooks/user/useCreateUser";
import useForm from "hooks/useForm";
import styles from "./Register.module.scss";
import BackBtn from "components/Button/BackBtn";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const { createUser, loading } = useCreateUser({ setErrors });

  const { onChange, onSubmit } = useForm(createUser, {
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  return (
    <div>
      <div className={styles.backContainer}>
        <BackBtn onClick={() => history.goBack()} />
      </div>
      <div div className={styles.formContainer}>
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <label>Name</label>
            <Form.Input
              name="fullName"
              placeholder="Full name"
              onChange={onChange}
            />
          </Form.Field>
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
            <label>Email</label>
            <Form.Input
              name="email"
              error={errors?.email}
              placeholder="exmpale@mali..."
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
          <Form.Field>
            <label>Confirm Password</label>
            <Form.Input
              type="password"
              placeholder="Confirm Password..."
              name="confirmPassword"
              onChange={onChange}
            />
          </Form.Field>
          <div style={{ width: "40%", marginTop: "50px" }}>
            <Button loading={loading} type="submit">
              SignUp
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
    </div>
  );
};

export default Register;

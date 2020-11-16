import { useMutation } from "@apollo/react-hooks";
import loginGql from "gql/user/login.gql";
import { useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "context/auth";

const useLogin = ({ setErrors }) => {
  const context = useContext(AuthContext);

  const history = useHistory();
  const [loginMutation, { loading }] = useMutation(loginGql, {
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    update(_, { data: { login: userData } }) {
      context.login(userData);
      history.push("/");
    },
  });

  const login = useCallback(
    async (values) => {
      try {
        loginMutation({
          variables: {
            username: values?.username,
            password: values?.password,
          },
        });
      } catch (ex) {
        console.log(ex);
      }
    },
    [loginMutation]
  );

  return {
    login,
    loading,
  };
};

export default useLogin;

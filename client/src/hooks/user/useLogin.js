import { useMutation } from "@apollo/react-hooks";
import loginGql from "gql/user/login.gql";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

const useLogin = ({ setErrors }) => {
  const history = useHistory();
  const [loginMutation, { loading }] = useMutation(loginGql, {
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    update(_, result) {
      history.push("/");
    },
  });

  const login = useCallback(async (values) => {
    try {
      loginMutation({
        variables: {
          username: values?.username,
          password: values?.password,
        },
      });
      console.log("logined");
    } catch (ex) {
      console.log(ex);
    }
  }, [loginMutation]);

  return {
    login,
    loading,
  };
};

export default useLogin;

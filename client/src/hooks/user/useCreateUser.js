import { useMutation } from "@apollo/client";
import { useContext, useCallback } from "react";
import createUserGql from "gql/user/createUser.gql";
import { useHistory } from "react-router-dom";
import { AuthContext } from "context/auth";

const useCreateUser = ({ setErrors }) => {
  const context = useContext(AuthContext);

  const history = useHistory();
  const [addNewUserMutation, { loading }] = useMutation(createUserGql, {
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    update(_, { data: { register: userData } }) {
      context.login(userData);
      history.push("/");
    },
  });

  const createUser = useCallback(
    async (values) => {
      try {
        await addNewUserMutation({
          variables: {
            username: values?.username,
            fullName: values?.fullName,
            password: values?.password,
            confirmPassword: values?.confirmPassword,
            email: values?.email,
          },
        });
      } catch (ex) {
        console.log(ex);
      }
    },
    [addNewUserMutation]
  );

  return {
    loading,
    createUser,
  };
};

export default useCreateUser;

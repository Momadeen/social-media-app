import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import createUserGql from "gql/user/createUser.gql";
import { useHistory } from "react-router-dom";

const useCreateUser = ({ setErrors }) => {
  const history = useHistory();
  const [addNewUserMutation, { loading }] = useMutation(createUserGql, {
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    update(proxy, result) {
      history.push("/");
    },
  });

  const createUser = useCallback(async (values) => {
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
      console.log("Done");
    } catch (ex) {
      console.log(ex);
    }
  }, [addNewUserMutation]);

  return {
    loading,
    createUser,
  };
};

export default useCreateUser;

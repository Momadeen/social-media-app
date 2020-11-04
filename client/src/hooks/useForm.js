import { useState } from "react";

const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    callback(values);
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};

export default useForm;

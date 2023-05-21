import { useCallback, useState } from 'react';

export const useHandleSubmit = (initialValues, operation) => {
    const [values, setValues] = useState(initialValues);
  
    const handleSubmit = useCallback(
      (e) => {
        e.preventDefault();
        operation(values); 
        setValues(initialValues);
      },
      [values, operation, initialValues]
    );
  
    return [values, handleSubmit, setValues];
  };



export const useHandleInputChange = (setValues) => {
  const handleInputChange = useCallback((e, setValues) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  return handleInputChange;
};

export const useHandleClickShowPassword = () => {
  const handleClickShowPassword = useCallback((setValues) => {
    setValues((prevValues) => ({
      ...prevValues,
      showPassword: !prevValues.showPassword,
    }));
  }, []);

  return handleClickShowPassword;
};

export const useHandleMouseDownPassword = () => {
  const handleMouseDownPassword = useCallback((event) => {
    event.preventDefault();
  }, []);

  return handleMouseDownPassword;
};

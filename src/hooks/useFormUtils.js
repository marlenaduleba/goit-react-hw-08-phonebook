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
    const handleInputChange = useCallback((event) => {
      const { name, value } = event.target;
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }, [setValues]);
  
    return handleInputChange;
  };

  export const useHandleClickShowPassword = (setValues) => {
    const handleClickShowPassword = useCallback(() => {
      setValues((prevValues) => ({
        ...prevValues,
        showPassword: !prevValues.showPassword,
      }));
    }, [setValues]);
  
    return handleClickShowPassword;
  };

  export const useHandleMouseDownPassword = () => {
    const handleMouseDownPassword = useCallback((event) => {
      event.preventDefault();
    }, []);
  
    return handleMouseDownPassword;
  };
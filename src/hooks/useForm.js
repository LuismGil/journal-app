import { useState } from 'react';
import { slugify } from '../helpers/helpers';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
      slug: target.name === 'title' && slugify(String(target.value)), //,
    });
  };

  return [values, handleInputChange, reset];
};

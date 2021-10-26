import React, { useState } from "react";

const useFields = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const resetFormData = () => {
    setFormData(initialState);
  };
  return [formData, handleChange, resetFormData];
};

export default useFields;

import { useState } from 'react';

export const useForm = (initialValue, submitCallback) => {
  const [input, setInput] = useState(initialValue);

  const handleInput = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    submitCallback(input);
    setInput("");
  }

  return [input, handleInput, handleSubmit];
}
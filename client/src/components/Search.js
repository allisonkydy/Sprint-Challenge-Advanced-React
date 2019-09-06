import React from 'react';
import { useForm } from '../hooks/useForm';

const Search = ({ filterPlayers }) => {
  const [input, handleInput, handleSubmit] = useForm("", filterPlayers)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        value={input}
        placeholder="enter a country..."
        onChange={handleInput}
      />
      <button type="submit" data-testid="search-btn">Search</button>
    </form>
  )
}

export default Search;

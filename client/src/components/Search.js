import React, { useState } from 'react';

const Search = ({ filterPlayers }) => {
  const [input, setInput] = useState("");

  const handleInput = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    filterPlayers(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        value={input}
        placeholder="enter a country..."
        onChange={handleInput}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search;

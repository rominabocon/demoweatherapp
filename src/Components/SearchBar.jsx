import React, {useState} from "react";

export default function SearchBar({onSearch}) {
   const [city, setCity] = useState('')

   const handleChange = (e) => {
    e.preventDefault();
    setCity (e.target.value)

  }
  return (
    <form className="searchBar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input onChange={(e) =>handleChange(e)}
        type="text"
        placeholder="👀Ciudad..."
        value={city}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}

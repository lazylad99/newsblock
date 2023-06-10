import React,{useState} from "react";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  function handleSearchClick(event) {
    event.preventDefault()
    props.onSearch(searchText);
  }

  return (
    <div className="container ">
      <form className="d-flex justify-content-center mt-4">
        <div className="input-group input-group-lg">
        <input
          className="form-control me-2"
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search/Press Double Enter"
          aria-label="Search"
          required
        />
        </div>
        <button
          className="btn btn-light"
          type="submit"
          onClick={handleSearchClick}
        >
          <i className="fa-solid fa-magnifying-glass" style={{color: "#000000", fontSize: "15px"}}></i>
        </button>
      </form>
    </div>
  );
}

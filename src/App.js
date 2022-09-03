import "./App.css";
import React, { useState, useEffect } from "react";
import { getCountryApi } from "./api/getCountry";
import Table from "./components/Table";
// import Input from "./input/Input.jsx";
import "./input/Input.css";

// ?
const filterCounrties = (searchText, listOfCountries) => {
  if (!searchText) {
    return listOfCountries;
  }
  return listOfCountries.filter(({ common }) =>
    common.toLowerCase().includes(searchText.toLowerCase())
  );
};

function App() {
  const [country, setCountries] = useState([]);

  useEffect(() => {
    getCountryApi().then((value) => {
      setCountries(value);
    });
  }, []);
  console.log(country);

  const [searchTerm, setSearchTerm] = useState("");
  const [countryList, setCountryList] = useState(country);
  //
  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCounrties = filterCounrties(searchTerm, country);
      setCountryList(filteredCounrties);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  return (
    <div key={country.ccn3} className="App">
      {/* <Input /> */}
      <div className="form">
        <form className="search-form">
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </form>
      </div>
      <Table country={country} />
    </div>
  );
}
// );
export default App;

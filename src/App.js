import "./App.css";
import React, { useState, useEffect } from "react";
import { getCountryApi } from "./api/getCountry";

//!
function App() {
  const [country, setCountries] = useState([]);

  useEffect(() => {
    getCountryApi().then((value) => {
      setCountries(value);
    });
  }, []);
  console.log(country);

  const [searchValue, setSearchValue] = useState("");
  const filteredCounrties = country.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  return (
    <div key={country.ccn3} className="App">
      {/* <Input /> */}
      <div className="form">
        <form className="search-form">
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </form>
      </div>
      <div className="table">
        <table className="table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Population</th>
              <th>Flags</th>
            </tr>
          </thead>
          <tbody>
            {filteredCounrties.map((elem) => {
              return (
                <tr>
                  <td className="td-name">{elem.name.common}</td>
                  <td>{elem.capital}</td>
                  <td>{elem.subregion}</td>
                  <td>{elem.population}</td>
                  <td>
                    <img width={150} height={100} src={elem.flags.svg} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;

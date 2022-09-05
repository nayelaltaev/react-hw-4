import "./App.css";
import React, { useState, useEffect } from "react";
import { getCountryApi } from "./api/getCountry";
import Modal from "./modal/Modal.jsx";

import "antd/dist/antd.css";
// import { Modal } from "antd";

// !!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!
function App(props) {
  const [currentModal, setCurrentModal] = useState(true);
  const [show, setShow] = useState(false);

  const clickTitle = (item) => {
    setCurrentModal(item);
    setShow(true);
  };
  console.log(currentModal);

  // !!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!
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
  // !!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!
  const [modalActive, setModalActive] = useState(false);
  //
  return (
    <div key={country.ccn3} className="App">
      <div className="form">
        <form className="search-form">
          <input
            className="search"
            type="text"
            placeholder="Search........"
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </form>
      </div>
      <h2 className="title">European Countries</h2>
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

          {filteredCounrties.map((elem) => {
            return (
              <tbody
                key={elem.area}
                className="mod-cont"
                onClick={() => clickTitle(elem)}
              >
                <tr>
                  <td className="td-name">{elem.name.common}</td>
                  <td>{elem.capital}</td>
                  <td>{elem.subregion}</td>
                  <td>{elem.population}</td>
                  <td>
                    <img width={150} height={100} src={elem.flags.svg} />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className="modal-window">
        <Modal
          name={currentModal.name}
          capital={currentModal.capital}
          population={currentModal.population}
          flags={currentModal.flags}
          onClose={() => setShow(false)}
          show={show}
        />
      </div>
    </div>
  );
}
export default App;

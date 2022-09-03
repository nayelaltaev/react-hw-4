import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import "./Table.css";

function Table({ country }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>Country</th>
          <th>Capital</th>
          <th>Region</th>
          {/* <th>Language</th> */}
          <th>Population</th>
          <th>Flags</th>
        </tr>
      </thead>
      <tbody>
        {country.map((elem) => {
          return (
            <tr>
              <td>{elem.name.common}</td>
              {/* <td>{elem.id}</td> */}
              {/* <td>{elem.name}</td> */}
              <td>{elem.capital}</td>
              <td>{elem.subregion}</td>
              {/* <td>{elem.languages.key}</td> */}
              <td>{elem.population}</td>
              <td>
                <img width={50} height={40} src={elem.flags.svg} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;

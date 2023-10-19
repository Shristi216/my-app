import React, { useEffect, useState } from "react";
function Mapping() {
  const [record, resetRecord] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => resetRecord(res));
  };
  useEffect(() => {
    getData();
  });

  const Country = ["India", "New York", "Sanfrancisco", "Chicago", "Dubai"];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>username</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {record.map((output) => (
            <tr>
              <td>{output.id}</td>
              <td>{output.name}</td>
              <td>{output.email}</td>
              <td>{output.username}</td>
              <td>{output.website}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul>
        {Country.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Mapping;

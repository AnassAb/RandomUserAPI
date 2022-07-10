import axios from "axios";
import { useState } from "react";

import "./styles.css";

export default function App() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Picture, setPicture] = useState("");

  const getUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setFirstName(res.data.results[0].name.first);
        setLastName(res.data.results[0].name.last);
        setEmail(res.data.results[0].email);
        setPicture(res.data.results[0].picture.medium);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>Random User Challenge</h1>

      {FirstName && LastName && Email && Picture ? (
        <div className="random-user">
          <img src={Picture} alt="User's avatar" />
          <div className="user-data">
            <h2>
              {FirstName} {LastName}
            </h2>
            <p>{Email}</p>
          </div>
        </div>
      ) : null}
      <button onClick={getUser}>Get Random User</button>
    </div>
  );
}

import React, { useState, Fragment } from "react";
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle,
  FaTimes,
} from "react-icons/fa";

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">Instructions</h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h3 className="header-sm">Enter two Github users</h3>
          <FaUserFriends
            className="bg-light"
            color="rgb(255, 191, 116)"
            size={140}
          />
        </li>
        <li>
          <h3 className="header-sm">Battle</h3>
          <FaFighterJet className="bg-light" color="#727272" size={140} />
        </li>
        <li>
          <h3 className="header-sm">See the winners</h3>
          <FaTrophy className="bg-light" color="rgb(255, 215, 0)" size={140} />
        </li>
      </ol>
    </div>
  );
};

const PlayerInput = () => {
  const [username, setUserName] = useState("");
  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(username);
  };
  return (
    <form className="column player" onSubmit={handleSubmit}>
      <label htmlFor="username" className="player-label">
        {props.label}
      </label>
      <div className="row player-inputs">
        <input
          type="text"
          id="username"
          className="input-light"
          placeholder="github username"
          autoComplete="off"
          value={username}
          onChange={handleChange}
        ></input>
        <button className="btn dark-btn" type="submit" disabled={!username}>
          Submit
        </button>
      </div>
    </form>
  );
};
const Battle = () => {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);
  const [battle, setBattle] = useState(false);

  return (
    <Fragment>
      <Instructions />
    </Fragment>
  );
};

export default Battle;

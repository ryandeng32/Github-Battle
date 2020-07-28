import React, { useState, Fragment } from "react";
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle,
  FaTimes,
} from "react-icons/fa";
import Results from "./Result";

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

const PlayerInput = (props) => {
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

const PlayerPreview = ({ username, onReset, label }) => {
  return (
    <div className="column player">
      <h3 className="player-label">{label}</h3>
      <div className="row bg-light">
        <div className="player-info">
          <img
            className="avatar-small"
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`https://github.com/${username}`} className="link">
            {username}
          </a>
        </div>
        <button className="btn-clear flex-center" onClick={onReset}>
          <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
        </button>
      </div>
    </div>
  );
};
const Battle = () => {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);
  const [battle, setBattle] = useState(false);

  const handleSubmit = (id, player) => {
    if (id === "playerOne") {
      setPlayerOne(player);
    } else if (id === "playerTwo") {
      setPlayerTwo(player);
    }
  };
  const handleReset = (id) => {
    if (id === "playerOne") {
      setPlayerOne(null);
    } else if (id === "playerTwo") {
      setPlayerTwo(null);
    }
  };
  if (battle === true) {
    return <Results playerOne={playerOne} playerTwo={playerTwo} />;
  }
  return (
    <Fragment>
      <Instructions />
      <div className="players-container">
        <h1 className="center-text header-lg">Players</h1>
        <div className="row space-around">
          {playerOne === null ? (
            <PlayerInput
              label="Player One"
              onSubmit={(player) => handleSubmit("playerOne", player)}
            />
          ) : (
            <PlayerPreview
              username={playerOne}
              label="Player One"
              onReset={() => {
                handleReset("playerOne");
              }}
            />
          )}
          {playerTwo === null ? (
            <PlayerInput
              label="Player Two"
              onSubmit={(player) => handleSubmit("playerTwo", player)}
            />
          ) : (
            <PlayerPreview
              username={playerTwo}
              label="Player Two"
              onReset={() => {
                handleReset("playerTwo");
              }}
            />
          )}
        </div>
        {playerOne && playerTwo && (
          <button
            className="btn dark-btn btn-space"
            onClick={() => {
              setBattle(true);
            }}
          >
            Battle
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default Battle;

import React, { useState } from "react";
import PropTypes from "prop-types";

function ComponentB(state) {
  const [connected, setConnected] = useState(state);
  return (
    <div>
      <h3>
        {" "}
        {connected === false ? "Contact not available" : "Contact online"}
      </h3>
      <button onClick={() => setConnected(!connected)}>
        {connected === false ? "Connect" : "Log off"}
      </button>
    </div>
  );
}

ComponentB.propTypes = {
  state: PropTypes.bool,
};

export default ComponentB;

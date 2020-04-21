import React, { useState } from "react";

function NetworkView({ network, index, completeNetwork, removeNetwork }) {
    return (
        <div>
          <button onClick={() => removeNetwork(index)}>x</button>
        </div>
    );
  }
  
  function NetworkForm({ addNetwork }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addNetwork(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }
  
  function Network() {
    const [network, setNetwork] = useState([
      {
        text: "set text",
      }
    ]);
  
    const addNetwork = text => {
      const newNetwork = [...network, { text }];
      setNetwork(newNetwork);
    };
  
    const completeNetwork = index => {
      const newNetwork = [...network];
      newNetwork[index].isCompleted = true;
      setNetwork(newNetwork);
    };
  
    const removeNetwork = index => {
      const newNetwork = [...network];
      newNetwork.splice(index, 1);
      setNetwork(newNetwork);
    };
  
    return (
      <div className="network">
        <div className="network list">
          {network.map((network, index) => (
            <Network
              key={index}
              index={index}
              network={network}
              removeNetwork={removeNetwork}
            />
          ))}
          <NetworkForm addNetwork={addNetwork} />
        </div>
      </div>
    );
  }
  
  export default NetworkView;
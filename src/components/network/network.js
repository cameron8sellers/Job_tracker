import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NetworkForm from '../network/networkForm'
import './network.css'

const Network = () => {
  return (
    <div>
      <h1>Store your contacts in one easy place!</h1>
      <NetworkForm /> 
    </div>
  );
};

export default Network;

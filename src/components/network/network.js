import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NetworkForm from '../network/networkForm'
import ContactCard from '../network/contactCards'
//import NetworkView from '../network/networkFilter'

const Network = () => {
  return (
    <div>
      <NetworkForm />
      {/*<NetworkView />*/}
      {/*<ContactCard /> */}
      <h1>No Access</h1>

    </div>
  );
};

export default Network;

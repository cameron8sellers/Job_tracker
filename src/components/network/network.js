import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NetworkForm from '../network/networkForm'
import ContactCard from '../network/contactCards'

const Network = () => {
  return (
    <div>
      <NetworkForm />
      <ContactCard />
    </div>
  );
};

export default Network;

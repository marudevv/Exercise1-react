import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../Models/contact.class";
import ComponentB from "./ComponentB";

function ComponentA({ contact }) {
  return (
    <div>
      <h2>Name: {contact.name}</h2>
      <h3>Surname: {contact.surname}</h3>
      <h3>Email: {contact.email}</h3>
      <ComponentB state={true} />
    </div>
  );
}

ComponentA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentA;

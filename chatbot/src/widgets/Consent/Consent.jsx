import React from "react";

import Options from "../Options/Options";

const Consent = (props) => {
  const options = [
    {
      name: "Yes, I do consent",
      handler: props.actionProvider.handleYesConsent,
      id: 1,
    },
    {
      name: "No, I do not consent",
      handler: props.actionProvider.handleNoConsent,
      id: 2,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Consent;

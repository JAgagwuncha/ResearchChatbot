import React from "react";

import Options from "../Options/Options";

//This widget is what determines if the user will continue or not
const Consent = (props) => {
  const options = [
    {
      name: "Yes, I do consent",
      handler: props.actionProvider.handleYesConsent, //This links to the actionProvider method that begins the data collection method
      id: 1,
    },
    {
      name: "No, I do not consent",
      handler: props.actionProvider.handleNoConsent, //This links to the actionProvider method that will tell the user to close the tab
      id: 2,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Consent;

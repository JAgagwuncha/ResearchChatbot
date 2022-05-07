import React from "react";

import Options from "../Options/Options";

//This widget is what determines if the user will continue or not
const Age = (props) => {
  const options = [
    {
      name: "18-29",
      handler: props.actionProvider.handleNationality, //This links to the actionProvider method that begins the data collection method
      id: 1,
    },
    {
      name: "30-39",
      handler: props.actionProvider.handleNationality, //This links to the actionProvider method that will tell the user to close the tab
      id: 2,
    },
    {
      name: "40-49",
      handler: props.actionProvider.handleNationality, //This links to the actionProvider method that will tell the user to close the tab
      id: 3,
    },
    {
      name: "50-59",
      handler: props.actionProvider.handleNationality, //This links to the actionProvider method that will tell the user to close the tab
      id: 4,
    },
    {
      name: "60-69",
      handler: props.actionProvider.handleNationality, //This links to the actionProvider method that will tell the user to close the tab
      id: 5,
    },
    {
      name: "70-79",
      handler: props.actionProvider.handleNationality, //This links to the actionProvider method that will tell the user to close the tab
      id: 6,
    },
    {
      name: "80+",
      handler: props.actionProvider.handleNationality, //This links to the actionProvider method that will tell the user to close the tab
      id: 7,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Age;

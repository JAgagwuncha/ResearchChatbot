import React from "react";
import User from "../../components/User";

import Options from "../Options/Options";

//This widget is what determines if the user will continue or not
const Gender = (props) => {
  const options = [
    {
      name: "Male",
      // User.gender = name,
      handler: props.actionProvider.handleAge, //This links to the actionProvider method that begins the data collection method
      id: 1,  
    },
    {
      name: "Female",
      handler: props.actionProvider.handleAge, //This links to the actionProvider method that will tell the user to close the tab
      id: 2,
    },
    {
      name: "Non-Binary",
      handler: props.actionProvider.handleAge, //This links to the actionProvider method that will tell the user to close the tab
      id: 3,
    },
    {
      name: "Other",
      handler: props.actionProvider.handleAge, //This links to the actionProvider method that will tell the user to close the tab
      id: 4,
    },
    {
      name: "Prefer not to say",
      handler: props.actionProvider.handleAge, //This links to the actionProvider method that will tell the user to close the tab
      id: 5,
    },
  ];
  
  return <Options options={options} title="Options" {...props} />;
};

export default Gender;

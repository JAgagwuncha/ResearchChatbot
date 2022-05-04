//Import methods from chatbot
import { createChatBotMessage } from "react-chatbot-kit";

//Imports for Widgets
import Consent from "../widgets/Consent/Consent";

//Setting chatbot name
const botName = "Research Bot";

const config = {
  //These are the initial messages, this also sets up the consent widget which will decide whether the user continues or not
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}`),
    createChatBotMessage(
      'Hello! I am a research chatbot that is used to gather information! If you wish to continue please type in "Go!" '
    ),
    //Calling the consent widget
    { widget: "Consent" },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },

  //Setting all the widgets
  widgets: [
    {
      widgetName: "Consent",
      widgetFunc: (props) => <Consent {...props} />,
    },
  ],
};

export default config;

import { createChatBotMessage } from "react-chatbot-kit";

import Consent from "../widgets/Consent/Consent";

const botName = "Research Bot";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}`),
    createChatBotMessage(
      'Hello! I am a research chatbot that is used to gather information! If you wish to continue please type in "Go!" '
    ),
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

  widgets: [
    {
      widgetName: "Consent",
      widgetFunc: (props) => <Consent {...props} />,
    },
  ],
};

export default config;

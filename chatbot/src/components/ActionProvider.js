import Consent from "../widgets/Consent/Consent";
import MessageParser from "./MessageParser";
import User from "./User";
//This class contains all the methods needed for the chatbot. It is called in the message parser
class ActionProvider {
  constructor(
    createChatbotMessage,
    setStateFunc,
    createClientMessage,
    addMessageToState
  ) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.addMessageToState = addMessageToState;
  }

  //This method greets the user if they respond with hello
  handleHello() {
    const message = this.createChatbotMessage("Hello. Nice to meet you.");

    //This sets the message so it is shown in the chatbot
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  //This method asks the user if they consent to their data being used
  handleOptions = (consent) => {
    const message = this.createChatbotMessage(
      "Hello! As this is a research project, we are asking for your consent to share and use your data! Please select below!",
      {
        widget: "Consent",
        loading: true,
        terminateLoading: true,
        ...consent,
      }
    );

    this.setState((prev) => ({
      ...prev,
      //IF YOU CAN ACCESS THE SELECTTION YOU CAN MAKE IT A MESSAGE FROM THE CHATBOT





      
      messages: [...prev.messages, message],
    }));
  };

  //If the user says no to their data being used the chatbot will not continue
  handleNoConsent = () => {
    const message = this.createChatbotMessage(
      "That is no problem!, hope you have a good day! Close the tab to get off the application!"
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  //If the user says yes, the process will then begin.
  handleYesConsent = (consent) => {
    // console.log(consent);
    const message = this.createChatbotMessage(
      "Thank you for consenting! Let us get started!" + "Pick a username!"
    );
    const message1 = this.createChatbotMessage("Pick a username!");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message, message1],
    }));
  };

  handleGender = (gender) => {
    const message = this.createChatbotMessage(
      "Please select the gender you identify as",
      {
        widget: "Gender",
        loading: true,
        terminateLoading: true,
        ...gender,
      }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  //When going from one widget to another, 
  handleAge = (gender, age) => {
    // console.log(User.name)
    const message = this.createChatbotMessage(
      "Please select the Age range you are",
      {
        widget: "Age",
        loading: true,
        terminateLoading: true,
        ...age,
      }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleNationality = (age) => {
    // console.log(consent);
    const message = this.createChatbotMessage(
      "Please enter your nationality" 
    );
    // const message1 = this.createChatbotMessage("Pick a username!");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;

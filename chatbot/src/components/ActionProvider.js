class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage, addMessageToState) {
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.addMessageToState = addMessageToState;
      }

   handleHello() {
    const message = this.createChatbotMessage('Hello. Nice to meet you.');

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

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
      messages: [...prev.messages, message],
    }));
  };

  handleNoConsent = () => {
    const message = this.createChatbotMessage(
      "That is no problem!, hope you have a good day! Close the tab to get off the application!"
    )
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleYesConsent = () =>{
    const message = this.createChatbotMessage(
      "Thank you for consenting! Let us get started!"
    )
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
 }
 
 export default ActionProvider;
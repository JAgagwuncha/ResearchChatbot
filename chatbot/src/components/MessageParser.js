class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        if (message.includes('hello')) {
          this.actionProvider.handleHello();
        }
      

      if (
        message.includes("options") ||
        message.includes("Go!") ||
        message.includes("do for me")
      ) {
        return this.actionProvider.handleOptions({ withAvatar: true });
      }
  }
}

  export default MessageParser;
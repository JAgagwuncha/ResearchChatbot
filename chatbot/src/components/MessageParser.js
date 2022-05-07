import User from "./User";
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
        message.includes("go") ||
        message.includes("Go!") ||
        message.includes("gp")
      ) {
        return this.actionProvider.handleOptions({ withAvatar: true });
      }

      if(
       message.includes("Joseph")
      ){
        Object.defineProperty(User, 'name', {
          value: message,
          writable: false
        });
        // User.name = message;
        return this.actionProvider.handleGender({ withAvatar: true });
      }
  }

}

  export default MessageParser;
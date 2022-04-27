import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../src/components/config'
import MessageParser from '../src/components/MessageParser.js';
import ActionProvider from '../src/components/ActionProvider.js';

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}


export default App;

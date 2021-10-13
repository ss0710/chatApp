import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return (
        <ChatEngine 
        height="100vh"
        projectID="7e08bf60-6ace-4428-bf94-162b78ccd0c0"
        userName="user1"
        userSecret="user1"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      /> 
  )
}

export default App;



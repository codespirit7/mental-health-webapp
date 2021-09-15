import { ChatEngine } from 'react-chat-engine';
import Auth from './auth';
import Video from "./Video";

import ChatFeed from '../Chat-Components/ChatFeed';

import './chat.css';

const projectID = 'c7a64c70-c709-4d29-9782-d9c537a555a8';

const chat = () => {
  //if (!localStorage.getItem('username')) return <LoginForm />;
 console.log(Auth.googleresponses);
  return (
    <div className="chat_app">
      <ChatEngine
      height="100vh"
      projectID={projectID}
      userName='Mentor1'
      userSecret='Mentor1'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />

      <p className="unique_para">Copy your Id and send it to our mentors, our team will contact you shortly.</p>

      <Video />
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default chat;


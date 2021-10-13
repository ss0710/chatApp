import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import ThierMessages from './ThierMessages';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index)=>{
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} stylr={{ width: '100%'}}>
                    <div className="message-block">
                        
                    </div>
                </div>
            );
        })
    }

    renderMessages();

    return (
        <div>
            chatFeed
        </div>
    )
}

export default ChatFeed;

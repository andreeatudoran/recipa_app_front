import axios from "axios";
import React, {useState, useEffect} from "react";

function MessagesList(){

    const [messages, setMessages] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/messages`)

            if(result.data.messages){
                let messagesArray = result.data.messages
                messagesArray.reverse()
                setMessages(messagesArray)
            }
        }

        fetchData()
    }, [])

    return (
        <div id="MessagesList">
            <h2 className="text-2xl font-bold text-cyan-600 mb-4 font-sans ">Latest recipes:</h2>
            <ul>
                {
                    messages.length ? messages.map(message=>
                        <li key = {message.entryID}>
                            <p>
                                <span className="text-bold font-sans ">{message.senderName}</span>
                                <span className="text-black font-sans ">{` sent a recipe to ${message.receiverMail}: ${message.messageContent}`}</span>

                            </p>
                        </li>
                        )
                        : <li>No messages yet</li>
                }
            </ul>
        </div>
    )
}

export default MessagesList;
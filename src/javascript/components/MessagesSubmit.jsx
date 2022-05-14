import axios from "axios";
import React from "react";

function MessagesSubmit({ recipe }) {
    const handleMessageSend = async (e) => {
        const senderName = document.getElementById('senderName').value;
        const receiverMail = document.getElementById('receiverMail').value;

        try{
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/messages/sendMail`, {
                senderName,
                receiverMail,
                senderMail: 'tudoranandreea18@stud.ase.ro',
                messageContent: recipe
            })

            console.log(response)

            if(response){
                alert(`\nMessage sent`);
            }

        }
        catch(error){
            console.log(error.response)
        }
    }

    return (
        <div id="MessagesSubmit">
            <h2 className="text-2xl font-bold text-cyan-600 mb-4 font-sans">Send mail:</h2>
            <form>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-cyan-600 text-xs font-bold mb-2 font-sans" htmlFor="senderName">
                            Name
                        </label>
                        <input className="appearance-none block w-full bg-cyan-100 text-cyan-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-sans" id="senderName" type="text" placeholder="Emma" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-cyan-600 text-xs font-bold mb-2 font-sans" htmlFor="receiverMail">
                            Receiver mail
                        </label>
                        <input className="appearance-none block w-full bg-cyan-100 text-cyan-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-sans" id="receiverMail" type="text" placeholder="emma@mail.com" />
                    </div>
                </div>
            </form>
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded m-2 capitalize font-sans" onClick={handleMessageSend}>Send Mail</button>
        </div>
    )
    
}

export default MessagesSubmit
import React, {useEffect, useContext}  from "react";
import { DashContext } from "../../../../Store";
import ChatMsgComp from "./ChatMsg";
import VideoComp from "./VideoComp";


const ChatScreen = () => {

    const [dash, setDash] = useContext(DashContext);

    useEffect(() => {
        setDash(2);
    })

    return (
        <div>
            <ChatMsgComp />
            <VideoComp />
        </div>
    );
}

export default ChatScreen;
import React from "react";
import ChatScreen from "./ChatScreen";
import CommonElements from "./CommonElements";
import Consult from "./ConsultScreen";
import Home from "./HomeScreen";

const Main = ({sel}) => {
    return (
        <div class="mainContainer">
            <CommonElements />
            {(sel===1) ? <Home /> : null}
            {(sel===2) ? <ChatScreen /> : null}
            {(sel===3) ? <Consult /> : null}      
        </div>
    );
}

export default Main
import React, { useEffect, useState } from "react";

const ChatMsgComp = () => {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        if(scroll===0){
            setScroll(1);
            var objDiv = document.getElementById("ChatActivityBox");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    })

    return (
        <div class="messagesContainer">
              <div className="ChatTitleBox"></div>
              <div id="ChatActivityBox" className="ChatActivityBox">
                  <div className="MessageContainer MssgUser">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgDoc">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgDoc">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgUser">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgDoc">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgUser">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgDoc">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgUser">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgUser">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgDoc">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgUser">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgDoc">
                      <div className="Message"></div>
                  </div>
                  <div className="MessageContainer MssgUser">
                      <div className="Message"></div>
                  </div>

              </div>
              <div className="chatControlBox">
                <div className="chatInputBar">
                    <div className="sendButton">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32"><path d="M30.5,14.58997l-28-10c-0.54999-0.19995-1.16998-0.04999-1.58002,0.37C0.51001,5.38,0.39001,6.01001,0.60999,6.56l2.91882,7.31079C3.68054,14.25073,4.0484,14.5,4.45752,14.5h7.70245c0.83002,0,1.5,0.66998,1.5,1.5c0,0.82996-0.66998,1.5-1.5,1.5H4.45752c-0.40912,0-0.77698,0.24921-0.92871,0.62921L0.60999,25.44c-0.21997,0.54999-0.09998,1.17999,0.31,1.59998C1.21002,27.33997,1.59998,27.5,2,27.5c0.16998,0,0.34003-0.03003,0.5-0.09003l28-10c0.59998-0.20996,1-0.77997,1-1.40997S31.09998,14.79999,30.5,14.58997z"/></svg>
                    </div>
                    <div className="addButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26.272" height="26.272" viewBox="0 0 26.272 26.272">
                            <path id="Icon_ionic-ios-add" data-name="Icon ionic-ios-add" d="M32.664,20.028H23.174V10.538a1.573,1.573,0,0,0-3.147,0v9.489H10.538a1.573,1.573,0,0,0,0,3.147h9.489v9.489a1.573,1.573,0,0,0,3.147,0V23.174h9.489a1.573,1.573,0,0,0,0-3.147Z" transform="translate(-8.465 -8.465)" fill="#949494" stroke="#949494" stroke-width="1"/>
                        </svg>
                    </div>
                    <input type="text" placeholder="Write your message...." />
                </div>
            </div>
        </div>
    );
}

export default ChatMsgComp; 
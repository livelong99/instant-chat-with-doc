import React from "react";

const VideoComp = () => {
    return (
        <div class="VideoChatContainer">
            <div className="userVideo" />
            <div className="videoOptions">
                <div className="videoOptionItem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="31.216" viewBox="0 0 35 31.216">
                        <g id="Group_79" data-name="Group 79" transform="translate(-568 -847)">
                            <path id="Icon_ionic-md-reverse-camera" data-name="Icon ionic-md-reverse-camera" d="M34.125,7.1H27.25l-2.5-2.6h-10l-2.5,2.6H5.375A3.189,3.189,0,0,0,2.25,10.353V32.465a3.189,3.189,0,0,0,3.125,3.252h28.75a3.189,3.189,0,0,0,3.125-3.252V10.353A3.189,3.189,0,0,0,34.125,7.1ZM28.5,21H20.867l3.5-3.666a6.264,6.264,0,0,0-4.594-2.073,6.719,6.719,0,0,0-6.563,6.829,6.719,6.719,0,0,0,6.563,6.829,6.485,6.485,0,0,0,6.109-4.349H28.2A8.8,8.8,0,0,1,19.773,31.2a8.923,8.923,0,0,1-8.75-9.1,8.959,8.959,0,0,1,8.75-9.1,8.539,8.539,0,0,1,6.172,2.675l2.563-2.675V21Z" transform="translate(565.75 842.5)" fill="#fff"/>
                        </g>
                    </svg>
                </div>
                <div className="videoOptionItem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                        <g id="Layer_2" data-name="Layer 2" transform="translate(0 -0.591)">
                            <g id="mic-off" transform="translate(0 0.487)">
                            <rect id="Rectangle_94" data-name="Rectangle 94" width="35" height="35" transform="translate(0 0.103)" fill="#fff" opacity="0"/>
                            <path id="Path_40" data-name="Path 40" d="M21.578,17.852a5.906,5.906,0,0,0,.62-2.584V7.885A5.906,5.906,0,0,0,10.5,6.778m16.125,8.491a1.477,1.477,0,0,0-2.953,0,7.176,7.176,0,0,1-1.019,3.662l2.171,2.244a10.336,10.336,0,0,0,1.8-5.906ZM16.291,21.175h.236l-6.143-6.157v.251A5.906,5.906,0,0,0,16.291,21.175Zm12.861,6.335L5.527,3.884a1.483,1.483,0,1,0-2.1,2.1L27.056,29.606a1.483,1.483,0,1,0,2.1-2.1Z" transform="translate(1.428 0.639)" fill="#fff"/>
                            <path id="Path_41" data-name="Path 41" d="M19.766,24.766H16.813V21.695a10.336,10.336,0,0,0,2.436-.65l-2.363-2.363a6.748,6.748,0,0,1-1.55.177,7.383,7.383,0,0,1-7.383-7.383,1.477,1.477,0,1,0-2.953,0,10.336,10.336,0,0,0,8.86,10.218v3.071H10.906a1.477,1.477,0,1,0,0,2.953h8.86a1.477,1.477,0,1,0,0-2.953Z" transform="translate(2.383 4.431)" fill="#fff"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="videoOptionItem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="23.333" viewBox="0 0 35 23.333">
                        <path id="Icon_awesome-video" data-name="Icon awesome-video" d="M20.429,4.5H2.9A2.9,2.9,0,0,0,0,7.4V24.929a2.9,2.9,0,0,0,2.9,2.9H20.429a2.9,2.9,0,0,0,2.9-2.9V7.4A2.9,2.9,0,0,0,20.429,4.5ZM31.938,6.791l-6.66,4.594v9.564l6.66,4.588A1.948,1.948,0,0,0,35,23.969V8.359A1.949,1.949,0,0,0,31.938,6.791Z" transform="translate(0 -4.5)" fill="#fff"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default VideoComp
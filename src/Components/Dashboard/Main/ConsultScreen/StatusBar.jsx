import React from "react";

const Consult_Status = () => {
    return (
        <div className="StepsContainer">
            <div className="stepTitleBox"></div>
            <div className="stepActivityContainer">
                <div className="stepProgressBar" />
                <div className="Step">
                    <div className="completeStatus">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26.993" height="20.245" viewBox="0 0 26.993 20.245">
                            <path d="M0,10.984l9.244,9.261L26.993,2.513,24.445,0,9.244,15.184,2.513,8.453Z" transform="translate(0 0)" fill="#5C2D90"/>
                        </svg>
                    </div>
                    <div className="statusMarker"></div>
                    <div className="StepText"></div>
                </div>
                <div className="Step">
                    <div className="completeStatus" style={{backgroundColor: "#0000003a"}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26.993" height="20.245" viewBox="0 0 26.993 20.245">
                            <path d="M0,10.984l9.244,9.261L26.993,2.513,24.445,0,9.244,15.184,2.513,8.453Z" transform="translate(0 0)" fill="#5C2D906a"/>
                        </svg>
                    </div>
                    <div className="statusMarker"></div>
                    <div className="StepText"></div>
                </div>
                <div className="Step">
                    <div className="completeStatus" style={{backgroundColor: "#0000003a"}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26.993" height="20.245" viewBox="0 0 26.993 20.245">
                            <path d="M0,10.984l9.244,9.261L26.993,2.513,24.445,0,9.244,15.184,2.513,8.453Z" transform="translate(0 0)" fill="#5C2D906a"/>
                        </svg>
                    </div>
                    <div className="statusMarker"></div>
                    <div className="StepText"></div>
                </div>
                <div className="Step">
                    <div className="completeStatus" style={{backgroundColor: "#0000003a"}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26.993" height="20.245" viewBox="0 0 26.993 20.245">
                            <path d="M0,10.984l9.244,9.261L26.993,2.513,24.445,0,9.244,15.184,2.513,8.453Z" transform="translate(0 0)" fill="#5C2D906a"/>
                        </svg>
                    </div>
                    <div className="statusMarker"></div>
                    <div className="StepText"></div>
                </div>
            </div>
        </div>
    );
}

export default Consult_Status
import React, {useEffect, useContext}  from "react";
import { DashContext } from "../../../../Store";
import Consult_Status from "./StatusBar";
import Consult_Step01 from "./Step01";

const Consult = () => {

    const [dash, setDash] = useContext(DashContext);

    useEffect(() => {
        setDash(3);
    })

    return (
        <div>
            <div class="bookingContainer">
                <Consult_Step01 />
            </div>
            <Consult_Status />
        </div>
    );
}

export default Consult
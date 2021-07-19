import React, {useEffect, useContext}  from "react";
import { DashContext } from "../../../../Store";
const Home = () => {

    const [dash, setDash] = useContext(DashContext);

    useEffect(() => {
        setDash(1);
    })

    return (
        <div class="profile">
              
        </div>
    );
}

export default Home;
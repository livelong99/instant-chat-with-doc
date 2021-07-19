import React from "react";
import Nav from "./Nav";
import Main from "./Main";

const Dashboard = ({sel}) => {
    return (
        <div>
            <Nav />
            <Main sel={sel} />
        </div>
    );
}

export default Dashboard
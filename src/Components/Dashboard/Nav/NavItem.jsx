import React from "react";

const NavItem = ({sel, path}) => {
    return (
        <div className="navItem">
            <div className="navIcon" style={{backgroundColor: (sel===1) ? "#5b2d903a" : "#F5F5F5" }} >
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 60 60">
                <path d={path} fill={(sel===1) ? "#5C2D90" : "#AC95C7" }/>
            </svg>
            </div>
        </div>
    );
}

export default NavItem
import React, { useEffect } from "react";
import typeData from "../../../../Data/docTypes.json";
import $ from "jquery";

const Consult_Step01 = () => {


    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    useEffect(() => {
        $(window).scroll(function(){

            if(isInViewport(document.getElementById("Ayurveda"))){
                console.log("Ayurveda Scrolled");
            }
    
    })
});

    return (
        <div>
            <div className="Step01TitleBox">
                <div id="ItemScroll" className="ItemScroll"/>
                <div className="TypesHeadItem"><p>Specialist</p></div>
                <div className="TypesHeadItem"><p>Super Specialist</p></div>
                <div className="TypesHeadItem"><p>Surgeons</p></div>
                <div className="TypesHeadItem"><p>Ayurveda</p></div>
                <div className="TypesHeadItem"><p>Homeopathy</p></div>
            </div>
            <div className="Step01ActivityBox">
                {typeData.map((type) => {
                    return(<>
                        <div id={type.type} className="sectionHead"><p>{type.type}</p></div>
                        <div className="sectionContent">
                            {type.items.map((item) => (<img src={item.link}/>))}
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
    );
}

export default Consult_Step01
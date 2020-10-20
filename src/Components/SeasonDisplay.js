import React from 'react';
import '../Css/SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Summer!",
        subText: "Little pool, My Love?",
        iconName: "sun"
    },
    winter: {
        text: "Winter!",
        subText: "Brr, it's so cold",
        iconName: "snowflake"
    }
}

const getSeason = (latitude, month) => {
    if(month>2 && month<9)
        return latitude > 0 ? 'summer' : 'winter';
    else
        return latitude > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {  
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, subText, iconName} = seasonConfig[season];
    return(
        <div className={`${season} season-display`}> 
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1> {text} <h3> {subText} </h3>  </h1> 
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )

}


 
export default SeasonDisplay;
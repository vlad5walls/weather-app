import React, {useContext} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {store} from "../../context/WeatherContext";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";



export default function Header() {
    const {isLoading, data: weather} = useContext(store);
    const info = weather?.current
    return (
        <header>
            <h1>Weather App</h1>
            {!isLoading && info &&
            <div className={'info'}>
                <div>{`${info.date.split(' ')[0]} ${info.date.split(' ')[1]}`} </div>
                <div><FontAwesomeIcon icon={faClock}/>&nbsp;{info.date.split(' ')[2]}</div>
                <div><FontAwesomeIcon icon={faGlobe}/>&nbsp;{info.location}</div>

            </div>
            }
        </header>
    );
}

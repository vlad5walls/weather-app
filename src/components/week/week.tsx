import React, {useContext} from 'react';
import {store} from "../../context/WeatherContext";
import {faWind, faSun} from '@fortawesome/free-solid-svg-icons';
import {faCompass, faMoon} from '@fortawesome/free-regular-svg-icons';
import degToNWSE from "../../helpers/degree-to-NWSE";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Week() {

    const {isLoading, data: weather} = useContext(store);

    return (
        <section className={'week'}>
            {!isLoading && weather && weather.week.days.map((day, index) =>
                <div className={'day'} key={index}>
                    <h4 className={'dayDate'}>{day.date}</h4>

                    <div className={'tempBlock'}>
                        <div className={'dayTempWrapper'}>
                            <span className={'dayTemp'}>
                                <FontAwesomeIcon icon={faSun}/>&nbsp;
                                <span>{day.temp.day}</span>
                                <span>&#8451;</span>
                            </span>
                            <span className={'like'}>&nbsp;/&nbsp;</span>
                            <span className={'nightTemp'}>
                                <FontAwesomeIcon icon={faMoon}/>&nbsp;
                                <span>{day.temp.night}</span>
                                <span>&#8451;</span>
                            </span>
                        </div>
                        <div className={'tempBlock'}>
                            <span className={'like'}>LIKE&nbsp;</span>
                            <span className={'dayTemp'}>{day.feels_like.day}&deg;</span>
                            <span className={'like'}>&nbsp;/&nbsp;</span>
                            <span className={'nightTemp'}>{day.feels_like.night}&deg;</span>
                        </div>
                    </div>

                    <div className={'weatherBlock'}>
                        <img
                            src={`http://openweathermap.org/img/wn/${day.weatherIcon}@4x.png`}
                            alt={day.weather}
                            className={'weatherIcon'}
                        />
                        <div className={'description'}>{day.weather}</div>
                        <div className={'windWrapper'}>
                        <span>
                        <FontAwesomeIcon className={'windIcon'} icon={faWind}/>&nbsp;
                            {day.wind_speed}
                            m/s&nbsp;
                            </span>
                            <span>
                        <FontAwesomeIcon className={'windIcon'} icon={faCompass}/>&nbsp;
                                {degToNWSE(day.wind_deg)}
                        </span>
                        </div>
                    </div>
                </div>
            )
            }
        </section>
    );
}

export default Week;
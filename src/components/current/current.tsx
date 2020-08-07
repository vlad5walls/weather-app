import React, {useContext} from 'react';
import {store} from "../../context/WeatherContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTemperatureHigh, faWind} from '@fortawesome/free-solid-svg-icons';
import {faCompass} from '@fortawesome/free-regular-svg-icons';
import degToNWSE from "../../helpers/degree-to-NWSE";

function Current() {

    const {isLoading, data: weather} = useContext(store);
    const today = weather?.current

    return (
        <section className={'current'}>
            {!isLoading && today &&
            <>
                <div className={'circle'}>
                    <div className={'tempWrapper'}>
                        <FontAwesomeIcon className={'tempIcon'} icon={faTemperatureHigh}/>&nbsp;
                        <span className={'temp'}>{today.temp}</span>
                        <span className={'deg'}>&#8451;</span>
                    </div>
                    <div>
                        <span className={'like'}>LIKE&nbsp;</span>
                        <span className={'likeTemp'}>{today.feels_like}&deg;</span>
                    </div>
                </div>

                <div className={'weatherBlock'}>
                    <img
                        src={`http://openweathermap.org/img/wn/${today.weatherIcon}@4x.png`}
                        alt={today.weather}
                        className={'weatherIcon'}
                    />
                    <div className={'description'}>{today.weather}</div>
                    <div className={'windWrapper'}>
                        <span>
                        <FontAwesomeIcon className={'windIcon'} icon={faWind}/>&nbsp;
                            {today.wind_speed}
                            m/s&nbsp;
                            </span>
                        <span>
                        <FontAwesomeIcon className={'windIcon'} icon={faCompass}/>&nbsp;
                            {degToNWSE(today.wind_deg)}
                        </span>
                    </div>
                </div>
            </>
            }
        </section>
    );
}

export default Current;
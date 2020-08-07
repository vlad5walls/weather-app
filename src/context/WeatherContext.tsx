import React, {createContext, useEffect, useReducer} from 'react';
import WeatherService from "../services/weather-service";
import {useLatlong} from "../hooks/useLatlong";
import Day from "../models/Day";

interface IStore {
    isLoading: boolean,
    data: {
        current: {
            date: string;
            location: string;
            feels_like: number;
            temp: number;
            weather: string;
            weatherIcon: string;
            wind_deg: number;
            wind_speed: number;
        },
        week: {
            location: string;
            days: Day[];
        }
    } | undefined

}

const initialState: IStore = {isLoading: true, data: undefined};
const store = createContext(initialState);
const {Provider} = store;

const WeatherProvider = ({children}: any) => {
    const latlong = useLatlong()
    const [state, dispatch] = useReducer((state: { isLoading: boolean, data: any }, action: any) => {
        switch (action.type) {
            case 'READ WEATHER':
                return {isLoading: false, data: action.payload};
            default:
                return initialState;
        }
        ;
    }, initialState);

    useEffect(() => {
        (new WeatherService()).index(latlong).then(weatherData => {
            if (latlong.lat && latlong.lon) {
                dispatch({
                    type: 'READ WEATHER',
                    payload: weatherData
                })
            }
        })
    }, [latlong])


    return <Provider value={state}>{children}</Provider>;
};

export {store, WeatherProvider}
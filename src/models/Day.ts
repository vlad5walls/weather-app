import moment from 'moment'
import calvToCels from "../helpers/calvin-to-celsius";


interface IFeels {
    day: number;
    eve: number;
    morn: number;
    night: number;
}

interface ITemp extends IFeels {
    min: number;
    max: number;
}

export interface IDayData {
    dt: number;
    feels_like: IFeels;
    temp: ITemp;
    weather: [{
        description: string,
        icon: string
    }];
    wind_deg: number;
    wind_speed: number;
}

export default class Day {
    public date: string;
    public feels_like: IFeels;
    public temp: ITemp;
    public weather: string;
    public weatherIcon: string;
    public wind_deg: number;
    public wind_speed: number;

    constructor(data: IDayData) {
        this.date = moment.unix(data.dt).format("Do MMM");
        this.feels_like = {
            day: calvToCels(data.feels_like.day),
            eve: calvToCels(data.feels_like.eve),
            morn: calvToCels(data.feels_like.morn),
            night: calvToCels(data.feels_like.night),
        }
        this.temp = {
            min: calvToCels(data.temp.min),
            max: calvToCels(data.temp.max),
            day: calvToCels(data.temp.day),
            eve: calvToCels(data.temp.eve),
            morn: calvToCels(data.temp.morn),
            night: calvToCels(data.temp.night),
        }
        this.weather = data.weather[0].description;
        this.weatherIcon = data.weather[0].icon;
        this.wind_deg = data.wind_deg;
        this.wind_speed = data.wind_speed;

    }
}
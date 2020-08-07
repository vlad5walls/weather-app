import Location from "./Location";
import moment from 'moment'
import calvToCels from "../helpers/calvin-to-celsius";

export interface ICurrentData {
    timezone: string;
    current: {
        dt: number;
        feels_like: number;
        temp: number;
        weather: [{
            description: string,
            icon: string
        }];
        wind_deg: number;
        wind_speed: number;
    }
}

export default class Current extends Location {

    public date: string;
    public feels_like: number;
    public temp: number;
    public weather: string;
    public weatherIcon: string;
    public wind_deg: number;
    public wind_speed: number;


    constructor(data: ICurrentData) {
        super(data);
        const {dt, feels_like, temp, weather, wind_deg, wind_speed} = data.current

        this.date = moment.unix(dt).format("Do MMM hh:mm");
        this.feels_like = calvToCels(feels_like);
        this.temp = calvToCels(temp);
        this.weather = weather[0].description;
        this.weatherIcon = weather[0].icon;
        this.wind_deg = wind_deg;
        this.wind_speed = wind_speed;
    }
}
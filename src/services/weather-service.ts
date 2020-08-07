import Current from '../models/Current';
import Week from '../models/Week';

const apiEndpoint: string | undefined = process.env.REACT_APP_WEATHER_API;
const apiKey: string | undefined = process.env.REACT_APP_WEATHER_API_KEY;


export default class WeatherService {

    public async index({lat, lon}: { lat: number, lon: number }): Promise<object> {

        const response = await fetch(`${apiEndpoint}?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}`);
        const data = await response.json()

        return {
            current: this.makeCurrentModel(data),
            week: this.makeWeekModel(data)
        }
    }

    protected makeCurrentModel(data: any) {
        return new Current(data);
    }

    protected makeWeekModel(data: any) {
        return new Week(data);
    }
}

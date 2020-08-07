import Day, {IDayData} from "./Day";
import Location from "./Location";

interface IData {
    timezone: string;
    daily: IDayData[];
}

export default class Week extends Location {

    public days: Day[];

    constructor(data: IData) {
        super(data);
        this.days = data.daily.map((day:IDayData) => new Day(day));
    }
}
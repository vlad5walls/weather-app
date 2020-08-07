export default class Location {
    public location: string;

    constructor(data: {timezone:string }) {
        this.location = data.timezone;
    }
}

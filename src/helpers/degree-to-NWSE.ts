const directions = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]

export default function degToNWSE(deg: number): string {
    const pos:number = +(deg / 22.5).toFixed() + 1
    return directions[pos];
};
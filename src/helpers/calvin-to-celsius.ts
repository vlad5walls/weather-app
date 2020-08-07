export default function calvToCels(temp: number): number {
    return +(temp - 273.15).toFixed(1);
};
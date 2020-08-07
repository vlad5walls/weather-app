import {useEffect, useState} from "react";

export const useLatlong = () => {

    const [latlong, setLatlong] = useState<{ lat: number, lon: number }>({
        lat: 0,
        lon: 0
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation
                .getCurrentPosition(position => setLatlong({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }));
        } else alert("Geolocation is not supported by this browser.");
    }, [])

    return latlong;

};
import { useEffect, useState } from "react";
import getAddressFromCoordinates from "../services/fetchLocation";

function LocationPicker() {
    const [currLocation, setCurrLocation] = useState(null);

    useEffect(() => {
        if(!navigator.geolocation){
            console.error("Geolocation is not supported in your browser");
            return;
        }

        const options = {
            enableHighAccuracy: true, // Uses GPS if available
            timeout: 5000,           // Max wait time (5 sec)
            maximumAge: 0
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude, accuracy } = position.coords;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                console.log(`Accuracy within ${accuracy} meters`);

                const locationData = await getAddressFromCoordinates(latitude, longitude);

                setCurrLocation({ latitude: latitude, longitude: longitude, ...locationData });
            }, (error) => {
                switch(error.code) {
                    case error.PERMISSION_DENIED: 
                        console.error("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error("Location information unavailiable");
                        break;
                    case error.TIMEOUT:
                        console.error("Timed out to get user location");
                        break;
                }
            }, options
        )
    }, [])

    return (
        <div className="location-container">
            {currLocation?.city ? `${currLocation.city}` : "Locating"}
        </div>
    )
}
export default LocationPicker;
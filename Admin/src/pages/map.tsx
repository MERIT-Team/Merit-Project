import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { FC, useState } from "react";
import Autocomplete from "react-google-autocomplete";

const Maps: FC = () => {
  const [libraries, setLibraries] = useState<string[]>(["places"]);
  const [lat, setLat] = useState(47.8864);
  const [lng, setLng] = useState(106.9057);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  const mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: true,
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={{ lat, lng }}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "800px", height: "800px" }}
        onClick={(e): void => {
          setLng(e.latLng?.lng() as number);
          setLat(e.latLng?.lat() as number);
        }}
      >
        <MarkerF position={{ lat, lng }} />
      </GoogleMap>
      <Autocomplete
        apiKey={"AIzaSyDUo9m9K_lIvCAw7ID18qwFYwZr0zxTjU4"}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        options={{
          types: ["(regions)"],
          componentRestrictions: { country: "ru" },
        }}
        defaultValue="Ulaanbaatar"
      />
    </div>
  );
};

export default Maps;

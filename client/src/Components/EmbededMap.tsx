import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";

import React, { useMemo, useState } from "react";

export default function EmbededMap() {
  type DefaultProps = {
    center: {
      lat: number;
      lng: number;
    };
    zoom: number;
  };
  const mapProps: DefaultProps = {
    center: {
      lat: 43.353,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  type MapProps = {
    googleMapsApiKey: string;
  };

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  //const mapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDWEPklURTHLQYoAR0NMgGcAyI-UQOKFbE&libraries=places&v=quarterly";

  if (googleMapsApiKey === undefined) {
    return (
      <iframe
        title="Marseillan Map"
        src="https://storage.googleapis.com/maps-solutions-s2uryz5085/locator-plus/v53z/locator-plus.html"
        loading="lazy"
      ></iframe>
    );
  } else return <Map googleMapsApiKey={googleMapsApiKey} />;

  function Map({ googleMapsApiKey }: MapProps) {
    const center = useMemo(() => mapProps.center, []);
    // infers type from default value
    const [selectedMarker, setSelectedMarker] = useState<
      DefaultProps["center"] | null
    >(center);

    const { isLoaded } = useLoadScript({
      googleMapsApiKey: googleMapsApiKey,
    });
    if (!isLoaded) return <div>Loading...</div>;
    return (
      <div className="embeded-map">
        <GoogleMap
          zoom={mapProps["zoom"]}
          center={center || mapProps.center}
          mapContainerClassName="map-container"
        >
          <MarkerF
            position={center}
            onClick={() => {
              setSelectedMarker(center);
            }}
          >
            {selectedMarker}
          </MarkerF>
        </GoogleMap>
      </div>
    );
  }
}

/*
  <div className="embeded-map">
    <GoogleMap
       zoom={10}
       center={center}
       mapContainerClassName="map-container"
     >
  </div>;

  <div className="embeded-map">
    <iframe
      title="Marseillan Map"
      src="https://storage.googleapis.com/maps-solutions-s2uryz5085/locator-plus/8251/locator-plus.html"
      width="100%"
      height="100%"
      loading="lazy"
    />
  </div>;
  */

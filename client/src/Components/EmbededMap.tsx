import React /*{ useMemo, useState }*/ from "react";
//import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function EmbededMap() {
  return (
    <div className="embeded-map">
      <iframe
        title="Marseillan Map"
        src="https://storage.googleapis.com/maps-solutions-s2uryz5085/locator-plus/v53z/locator-plus.html"
        loading="lazy"
      ></iframe>
    </div>
  );
  /*
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
  }*/
}

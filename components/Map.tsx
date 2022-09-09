import { useEffect, useState } from "react";
import { Map as PigeonMap, Marker } from "pigeon-maps";
import { Card } from "./Card";

type MapProps = {
  longitude?: number;
  latitude?: number;
};

export const Map: React.FC<MapProps> = ({ longitude, latitude }) => {
  const [center, setCenter] = useState<[number, number]>([50.879, 4.6997]);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (longitude && latitude) {
      setCenter([latitude, longitude]);
    }
  }, [longitude, latitude]);

  return (
    <Card flex="3">
      <PigeonMap
        center={center}
        zoom={zoom}
        onBoundsChanged={({ center, zoom }) => {
          setCenter(center);
          setZoom(zoom);
        }}
      >
        {longitude && latitude && <Marker anchor={[latitude, longitude]} />}
      </PigeonMap>
    </Card>
  );
};

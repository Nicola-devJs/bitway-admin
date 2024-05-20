import React, { useState } from "react";
import { YMaps, Map, Placemark, MapState } from "react-yandex-maps";

interface IProps {
  label?: string;
}

export const YMapApp = ({ ...props }: IProps) => {
  const [coords, setCoords] = useState<MapState>({ center: [55.751574, 37.573856], zoom: 9 });
  return (
    <YMaps query={{ apikey: import.meta.env.VITE_YANDEX_MAPS_APIKEY, lang: "ru_RU" }} version="2.1">
      <Map width={"100%"} height={"30vw"} state={coords}>
        <Placemark defaultGeometry={coords.center} properties={coords} />
      </Map>
    </YMaps>
  );
};

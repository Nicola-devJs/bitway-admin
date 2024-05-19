import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

interface IProps {
  label?: string;
}

export const YMapApp = ({ ...props }: IProps) => {
  return (
    <YMaps query={{ apikey: import.meta.env.VITE_YANDEX_MAPS_APIKEY, lang: "ru_RU" }}>
      <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} width={"100%"} height={"30vw"}>
        <Placemark defaultGeometry={[55.751574, 37.573856]} />
      </Map>
    </YMaps>
  );
};

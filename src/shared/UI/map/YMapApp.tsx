import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

interface IProps {
  label?: string;
}

export const YMapApp = ({ ...props }: IProps) => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
    controls: ["zoomControl", "fullscreenControl"],
  };

  return (
    <YMaps query={{ apikey: import.meta.env.VITE_YANDEX_MAPS_APIKEY, lang: "ru_RU" }}>
      <Map
        width={"100%"}
        height={"30vw"}
        state={defaultState}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark
          modules={["geoObject.addon.balloon"]}
          geometry={defaultState.center}
          properties={{
            balloonContentBody: "This is balloon loaded by the Yandex.Maps API module system",
          }}
        />
      </Map>
    </YMaps>
  );
};

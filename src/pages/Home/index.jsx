import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const Home = () => {
  // Центр Бишкека
  const mapCenter = [42.874621, 74.612198];

  return (
    <>
      <YMaps query={{ apikey: "1edf294d-664d-4286-af6a-ac306969cf67" }}>
        <div style={{ width: "100%", height: "100vh" }}>
          <Map
            defaultState={{
              center: mapCenter,
              zoom: 12,
            }}
            width="100%"
            height="100%"
          >
            {/* Отметка в центре Бишкека */}
            <Placemark
              geometry={mapCenter}
              properties={{
                hintContent: "Центр Бишкека",
                balloonContent: "Площадь Ала-Тоо",
              }}
            />
          </Map>
        </div>
      </YMaps>
    </>
  );
};

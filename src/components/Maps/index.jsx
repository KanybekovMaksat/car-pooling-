import { YMaps, Map, Placemark, Polyline } from '@pbe/react-yandex-maps'

export const Maps = () => {
  const mapCenter = [42.875983, 74.603791]
  const home = [42.882358, 74.708436]

  return (
    <YMaps query={{ apikey: '1edf294d-664d-4286-af6a-ac306969cf67' }}>
      <div style={{ width: '100%', height: '100vh' }}>
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
              hintContent: 'Центр Бишкека',
              balloonContent: 'Площадь Ала-Тоо',
            }}
          />
          {/* Мой дом */}
          <Placemark
            geometry={home}
            properties={{
              hintContent: 'Мой Дом',
              balloonContent: 'Дом',
            }}
          />
          {/* Новая точка */}

          <Polyline
            geometry={[home, mapCenter]} // Последовательность точек
            options={{
              balloonCloseButton: false,
              strokeColor: '#1E90FF',
              strokeWidth: 4,
              strokeOpacity: 0.8,
            }}
          />
        </Map>
      </div>
    </YMaps>
  )
}

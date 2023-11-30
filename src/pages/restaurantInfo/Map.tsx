import { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

interface MapProps {
  address: string;
}
const Map: React.FC<MapProps> = ({ address }) => {
  const geocoder = new kakao.maps.services.Geocoder();
  console.log('map안에', address);
  useEffect(() => {
    geocoder.addressSearch(address, function (result, status) {
      // console.log('map address', address);
      // console.log('Mapresult:', result);
      // console.log('map satus', status, kakao.maps.services.Status.OK);
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        const newMarker = new kakao.maps.Marker({
          position: coords,
        });
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: coords, //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        newMarker.setMap(map);
      }
    });
    //   const marker = new kakao.maps.Marker({
    //     position: markerPosition,
    //   });
    //   // 마커가 지도 위에 표시되도록 설정합니다
  }, [address]);
  return <MapBox id="map">Map</MapBox>;
};

export default Map;

const MapBox = styled.div`
  margin: 10px;
  width: 100%;
`;

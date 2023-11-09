import { useState, useEffect } from 'react';
import styled from 'styled-components';
import DaumPostcode, { Address } from 'react-daum-postcode';

interface CustomAddress {
  fullAd: string; // 전체 주소를 추가합니다.
  restaurantAdmin: {
    city: string;
    district: string;
    dong: string;
  };
  // coords: {
  //   lat: number;
  //   lng: number;
  // };
}

interface DaumPostProps {
  onAddressSelect: (address: CustomAddress) => void;
  initialAddress: string; // 초기 주소 props를 추가합니다.
}

declare global {
  interface Window {
    kakao: any;
  }
}

const DaumPost: React.FC<DaumPostProps> = ({
  onAddressSelect,
  initialAddress,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [areaAddress, setAreaAddress] = useState(''); // 지역 주소 (시, 도 등)
  const [detailAddress, setDetailAddress] = useState(''); // 상세 주소 (도로명, 건물명 등)
  const [map, setMap] = useState<any>(null); // 지도 객체 상태
  const [marker, setMarker] = useState<any>(null); // 마커 객체 상태

  useEffect(() => {
    if (initialAddress) {
      const addressParts = initialAddress.split(' '); // 주소를 공백 기준으로 나눕니다.
      if (addressParts.length > 2) {
        setAreaAddress(`${addressParts[0]} ${addressParts[1]}`);
        setDetailAddress(addressParts.slice(2).join(' '));
      } else {
        setAreaAddress(initialAddress);
        setDetailAddress('');
      }
    }
  }, [initialAddress]);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
      setMap(map);
    }
  }, []);

  const handleComplete = (data: Address) => {
    const fullAddress = data.address; // 전체 주소
    let extraAddress = ''; // 추가 주소 정보

    // 주소 유형이 도로명 주소인 경우 추가 정보를 포함합니다.
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
    }

    // 지역 주소와 상세 주소 분리
    const areaAddress = `${data.sido} ${data.sigungu}`.trim(); // '시, 도' + '시, 군, 구'
    const detailAddress = fullAddress.replace(areaAddress, '').trim(); // 지역 주소를 제외한 나머지 주소

    setAreaAddress(areaAddress);
    setDetailAddress(
      detailAddress + (extraAddress !== '' ? ` (${extraAddress})` : '')
    );

    // 주소를 좌표로 변환하여 지도에 마커로 표시
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(fullAddress, function (result, status) {
      console.log('fulladdress', fullAddress);
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        console.log('coords', coords);
        if (marker) {
          // 이전 마커가 있으면 제거
          marker.setMap(null);
        }

        const newMarker = new kakao.maps.Marker({
          position: coords,
          map: map,
        });

        setMarker(newMarker);
        map.setCenter(coords);

        onAddressSelect({
          restaurantAdmin: {
            fullAd: fullAddress, // 전체 주소를 추가합니다.
            city: data.sido,
            district: data.sigungu,
            dong: data.bname || '',
          },
        });

        //           restaurantAdministrativeDistrict: { // 잘몰라서 주석처리 해놨습니다
        //             cityName: data.sido,
        //             districtsName: data.sigungu,
        //             dongName: data.bname || '',

          },
          // coords: {
          //   lat: parseFloat(result[0].y), // 문자열을 숫자로 변환
          //   lng: parseFloat(result[0].x)
          // }
        });
      }
    });

    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AddressSearchMapContainer>
      <label>주소</label>
      {isModalOpen && (
        <ModalContainer>
          <DaumPostcode
            onComplete={handleComplete}
            autoClose={true}
            style={{
              width: '380px', // px 단위를 문자열로 명시합니다.
              height: '500px', // px 단위를 문자열로 명시합니다.
              padding: '10px',
            }}
          />
          <button onClick={handleCloseModal}>닫기</button>
        </ModalContainer>
      )}

      <AddressSection>
        <AddressInput>
          <input
            type="text"
            placeholder="지역 주소"
            value={areaAddress}
            onChange={(e) => setAreaAddress(e.target.value)}
          />

          <input
            type="text"
            placeholder="상세 주소"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
        </AddressInput>
        <button type="button" onClick={handleOpenModal}>
          주소 찾기
        </button>
      </AddressSection>

      <MapContainer>
        <KakaoMap id="map" />
      </MapContainer>
    </AddressSearchMapContainer>
  );
};

const AddressSearchMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-bottom: 15px;
  & > label{
    margin-bottom: 5px;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddressSection = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid red;

  & > button {
    width: 10%;
  }
`;

const AddressInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  & > input {
    padding: 3px;
    width: 100%;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 10px;
  border: 1px solid grey;
`;

const KakaoMap = styled.div`
  width: 100%;
  height: 100%;
`;

export default DaumPost;

import { StMain } from '../../../components/Stmain';
import DaumPost from '../../../components/Admin/DaumPost';
import * as Set from '../admin/style/StoreRegistStyle';
import styled from 'styled-components';
import { useForm } from '../../../hooks/useform';
import {
  getRestaurantData,
  putRestaurantData,
} from '../../../apis/adminApi/adminApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Menu {
  restaurantMenuName: string;
  restaurantMenuPrice: number;
}

interface Image {
  restaurantOriginName: string;
  restaurantResizeUrl: string;
}

const StoreEditPage: React.FC = () => {
  const [restaurantStatus, setRestaurantStatus] = useState('OPEN');
  const {
    businessName,
    setBusinessName,
    tell,
    setTell,
    menus,
    setMenus,
    files,
    setFiles,
    instagram,
    setInstagram,
    businessHours,
    setBusinessHours,
    breakTime,
    setbreakTime,
    addressData,
    handleAddressSelect,
    handleFileChange,
    handleFileButtonClick,
    addMenu,
    handleMenuChange,
  } = useForm();
  const { restaurantId } = useParams();

  // 식당 상태(영업, 폐업)를 변경하는 함수
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantStatus(e.target.value);
  };

  // 데이터 불러오기 및 초기화 부분
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurantData(restaurantId);

        setBusinessName(data.restaurantName);
        setTell(data.restaurantTelNum);
        setMenus(
          data.restaurantMenuDtoList.map((menu: Menu) => ({
            name: menu.restaurantMenuName,
            price: menu.restaurantMenuPrice,
          }))
        );
        setFiles(
          data.restaurantImageDtoList.map((image: Image) => ({
            name: image.restaurantOriginName,
            url: image.restaurantResizeUrl,
          }))
        );
        setInstagram(data.restaurantWebSite);
        setBusinessHours(data.restaurantOpenTime);
        setbreakTime(data.restaurantBreakTime);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [restaurantId]);

  // 폼 제출 핸들러
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    const address = addressData ? addressData.restaurantAdmin : null;
    const { city, district, dong, fullAd } = address || {};

    const data = {
      restaurantName: businessName,
      restaurantTelNum: tell,
      restaurantAddress: fullAd || '',
      restaurantOpenTime: businessHours,
      restaurantBreakTime: breakTime,
      restaurantWebSite: instagram,
      restaurantStatus: restaurantStatus,
      restaurantAdministrativeDistrict: {
        cityName: city || '',
        districtsName: district || '',
        dongName: dong || '',
      },
      restaurantMenuDtoList: menus.map((menu) => ({
        restaurantMenuName: menu.name,
        restaurantMenuPrice: menu.price ? parseInt(menu.price, 10) : 0,
      })),
      restaurantImageDtoList: files,
    };

    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'application/json' });
    formData.append('data', blob);

    files.forEach((file) => {
      if (file) {
        formData.append('file', file);
      }
    });

    try {
      await putRestaurantData(restaurantId, formData);
      alert('식당 정보가 성공적으로 업데이트되었습니다!');
    } catch (error) {
      alert('수정 시 반드시 주소를 새롭게 작성하여야 합니다.');
    }
  };

  return (
    <StMain>
      <Set.RegistContainer onSubmit={handleSubmit}>
        <Set.MainTextBox>
          <div>
            <h1>식당 정보 수정하기ㅣ</h1>
            <span>당신의 식당을 수정하세요!</span>
          </div>
          <StatusBox>
            <label>
              <input
                type="radio"
                value="OPEN"
                checked={restaurantStatus === 'OPEN'}
                onChange={handleStatusChange}
              />
              영업
            </label>
            <label>
              <input
                type="radio"
                value="CLOSE"
                checked={restaurantStatus === 'CLOSE'}
                onChange={handleStatusChange}
              />
              폐업
            </label>
          </StatusBox>
        </Set.MainTextBox>

        <Set.ImageRegistSection>
          <h1>이미지등록</h1>
          {files.map((file, index) => (
            <div key={index}>
              <input
                type="file"
                id={`fileInput-${index}`}
                style={{ display: 'none' }} // input을 숨깁니다.
                onChange={(e) => handleFileChange(e, index)}
              />
              <input
                type="text"
                readOnly
                value={file ? file.name : ''} // 선택된 파일의 이름을 표시합니다.
              />
              <button
                type="button"
                onClick={() => handleFileButtonClick(index)}
              >
                찾아보기
              </button>
            </div>
          ))}
        </Set.ImageRegistSection>

        <Set.BusinessNameSection>
          <label>상호명</label>
          <input
            type="text"
            value={businessName || ''}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </Set.BusinessNameSection>

        <Set.TellSection>
          <label>전화번호</label>
          <input
            type="text"
            value={tell}
            onChange={(e) => setTell(e.target.value)}
          />
        </Set.TellSection>

        <DaumPost
          onAddressSelect={handleAddressSelect}
          initialAddress="기본 주소"
        />

        <Set.InstagramSection>
          <label>인스타그램</label>
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </Set.InstagramSection>

        <Set.HoursSection>
          <label>영업시간</label>
          <textarea
            value={businessHours}
            onChange={(e) => setBusinessHours(e.target.value)}
          />
        </Set.HoursSection>

        <Set.HoursSection>
          <label>브레이크타임</label>
          <textarea
            value={breakTime}
            onChange={(e) => setbreakTime(e.target.value)}
          />
        </Set.HoursSection>

        <Set.MenuSection>
          <label>대표메뉴</label>
          <Set.MenuScrollBox>
            {menus.map((menu, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="name"
                  placeholder="메뉴명"
                  value={menu.name}
                  onChange={(e) => handleMenuChange(e, index)}
                />
                <input
                  type="number"
                  name="price"
                  placeholder="가격"
                  value={menu.price}
                  onChange={(e) => handleMenuChange(e, index)}
                />
              </div>
            ))}
          </Set.MenuScrollBox>
          <button type="button" onClick={addMenu}>
            +
          </button>
        </Set.MenuSection>

        <Set.SubmitButton type="submit">최종완료</Set.SubmitButton>
      </Set.RegistContainer>
    </StMain>
  );
};

export default StoreEditPage;

const StatusBox = styled.div`
  display: flex;
  align-items: center;

  label:first-child {
    color: blue;
    font-size: 15px;
  }

  label:last-child {
    color: red;
    font-size: 15px;
  }

  input {
    margin-left: 10px;
  }
`;

import { StMain } from '../../../components/Stmain';
import DaumPost from '../../../components/Admin/DaumPost';
import { useState, ChangeEvent, FormEvent } from 'react';
import { IMenu, IAddressData } from '../admin/types/storeregist';
import * as Set from '../admin/style/StoreRegistStyle';
import { registerRestaurant } from '../../../apis/adminApi/adminApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const StoreRegistPage: React.FC = () => {
  const [businessName, setBusinessName] = useState<string>(''); //식당의 이름
  const [tell, setTell] = useState<string>(''); //전화번호
  const [menus, setMenus] = useState<IMenu[]>([{ name: '', price: '' }]); //메뉴
  const [files, setFiles] = useState<(File | null)[]>(Array(5).fill(null)); //이미지 파일
  const [instagram, setInstagram] = useState<string>(''); //웹사이트
  const [businessHours, setBusinessHours] = useState<string>(''); //영업시간
  const [breakTime, setbreakTime] = useState<string>(''); //브레이크타임
  const [addressData, setAddressData] = useState<IAddressData | null>(null); //주소
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newRestaurantData: FormData) => registerRestaurant(newRestaurantData),
    {
      onSuccess: () => {
        alert('Restaurant registered successfully!');
        queryClient.invalidateQueries(['restaurants']);
      },
      onError: (error: any) => {
        // Error callback
        alert(`Registration failed: ${error.message}`);
      },
    }
  );

  // 주소 데이터를 선택했을 때 해당 데이터를 상태에 설정하는 함수
  const handleAddressSelect = (adrdata: IAddressData | null) => {
    setAddressData(adrdata);
    console.log('Selected address data:', adrdata);
  };

  // 파일을 선택했을 때 해당 파일을 상태에 설정하는 함수
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newFiles = [...files];
    const file = e.target.files ? e.target.files[0] : null;
    newFiles[index] = file;
    setFiles(newFiles);
  };

  // 파일 입력 필드를 클릭하는 함수
  const handleFileButtonClick = (index: number) => {
    const fileInput = document.getElementById(
      `fileInput-${index}`
    ) as HTMLInputElement;
    fileInput?.click();
  };

  // 메뉴를 추가하는 함수
  const addMenu = () => {
    setMenus([...menus, { name: '', price: '' }]);
  };

  // 메뉴의 내용이 변경될 때 해당 변경사항을 상태에 반영하는 함수
  const handleMenuChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const list = [...menus];

    if (name === 'price') {
      list[index].price = value;
    } else {
      list[index][name as 'name'] = value;
    }

    setMenus(list);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    // const { city, district, dong, fullAd } = addressData.restaurantAdmin;
    const address = addressData ? addressData.restaurantAdmin : null;
    const { city, district, dong, fullAd } = address || {};

    const data = {
      restaurantName: businessName, //식당이름
      restaurantTelNum: tell, //전화번호
      restaurantAddress: fullAd || '', //주소
      restaurantOpenTime: businessHours, //영업시간
      restaurantBreakTime: breakTime, //브레이크타임
      restaurantWebSite: instagram, //웹사이트
      restaurantAdministrativeDistrict: {
        cityName: city || '', //시 이름
        districtsName: district || '', //구 이름
        dongName: dong || '', //동 이름
      },
      restaurantMenuDtoList: menus.map((menu) => ({
        restaurantMenuName: menu.name,
        restaurantMenuPrice: menu.price ? parseInt(menu.price, 10) : 0, // 문자열 price를 숫자로 변환
      })),
    };

    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'application/json' });
    formData.append('data', blob);

    files.forEach((file) => {
      if (file) {
        formData.append('file', file);
      }
    });

    mutation.mutate(formData);
  };

  return (
    <StMain>
      <Set.RegistContainer onSubmit={handleSubmit}>
        <Set.MainTextBox1>
          <h1>식당 등록하기</h1>
          <span>ㅣ당신의 식당을 등록하세요!</span>
        </Set.MainTextBox1>

        <Set.ImageRegistSection>
          <label>이미지등록</label>
          {files.map((file, index) => (
            <div key={index}>
              <input
                type="file"
                id={`fileInput-${index}`}
                style={{ display: 'none' }} 
                onChange={(e) => handleFileChange(e, index)}
              />
              <input
                placeholder='이미지를 선택하세요'
                type="text"
                readOnly
                value={file ? file.name : ''} 
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
            placeholder='상호명을 입력하세요'
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </Set.BusinessNameSection>

        <Set.TellSection>
          <label>전화번호</label>
          <input
            placeholder='전화번호를 입력하세요'
            type="text"
            value={tell}
            onChange={(e) => setTell(e.target.value)}
          />
        </Set.TellSection>

        <DaumPost onAddressSelect={handleAddressSelect} initialAddress="기본 주소"  />

        <Set.InstagramSection>
          <label>인스타그램</label>
          <input
            type="text"
            placeholder='웹사이트 url 또는 인스타그램을 입력하세요.'
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

export default StoreRegistPage;

import { StMain } from '../../../components/Stmain';
import DaumPost from '../../../components/Admin/DaumPost';
import {RegistContainer, MainTextBox, ImageRegistSection, TellSection, BusinessNameSection,InstagramSection,
HoursSection, MenuSection, MenuScrollBox, SubmitButton} from '../admin/style/StoreRegistStyle';
import { useForm } from "../../../hooks/useform" // useForm 훅 가져오기
import { getRestaurantData } from '../../../apis/adminApi/adminApi'; //api 가져오기 
import { useParams } from 'react-router-dom'; // 
import { useEffect } from 'react';

const StoreEditPage = () => {
  const { businessName, setBusinessName,
          tell, setTell,
          menus, setMenus,
          files, setFiles,
          instagram, setInstagram,
          businessHours, setBusinessHours,
          breakTime, setbreakTime,
          addressData, setAddressData,
          handleAddressSelect,
          handleFileChange,
          handleFileButtonClick,
          addMenu,
          handleMenuChange } = useForm();
          const { restaurantId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurantData(restaurantId);
        
        
        setBusinessName(data.restaurantName);
        setTell(data.restaurantTelNum);
        setMenus(data.restaurantMenuDtoList.map(menu => ({
          name: menu.restaurantMenuName,
          price: menu.restaurantMenuPrice
        })));
        setFiles(data.restaurantImageDtoList.map(image => ({
          name: image.restaurantOriginName,
          url: image.restaurantResizeUrl  
        })));
        setInstagram(data.restaurantWebSite);
        setBusinessHours(data.restaurantOpenTime);
        setbreakTime(data.restaurantBreakTime);
        setAddressData({
          cityName: data.restaurantAdministrativeDistrict.cityName,
          districtsName: data.restaurantAdministrativeDistrict.districtsName,
          dongName: data.restaurantAdministrativeDistrict.dongName,
        });
        } catch (error) {
        console.error('Failed to fetch data:', error);
          }
        };
        
         fetchData();
        }, [restaurantId]);
        
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

return (
  <StMain>
  
    <RegistContainer onSubmit={handleSubmit}>
     
      <MainTextBox>
       <h1>신규 식당 등록</h1>
      ㅣ<span>당신의 식당을 등록하세요!</span>
      </MainTextBox>

  
      <ImageRegistSection>
        <h1>이미지등록</h1>
        {files.map((file, index) => (
          <div key={index}>
            <input type="file" id={`fileInput-${index}`} style={{ display: 'none' }} // input을 숨깁니다.
              onChange={(e) => handleFileChange(e, index)} 
            />
            <input
              type="text" readOnly value={file ? file.name : ''} // 선택된 파일의 이름을 표시합니다.
            />
            <button type="button"
             onClick={() => handleFileButtonClick(index)}
             >찾아보기</button>
          </div>
        ))}
      </ImageRegistSection>

 
      <BusinessNameSection>
        <label>상호명</label>
        <input 
          type="text" value={businessName || ''} onChange={(e) => setBusinessName(e.target.value)}
        />
      </BusinessNameSection>

   
      <TellSection>
        <label>전화번호</label>
        <input type="text" value={tell} onChange={(e) => setTell(e.target.value)}/>
      </TellSection>

      <DaumPost 
      onAddressSelect={handleAddressSelect}
      />


      <InstagramSection>
        <label>인스타그램</label>
        <input 
          type="text" 
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
      </InstagramSection>

  
      <HoursSection>
        <label>영업시간</label>
        <textarea 
          value={businessHours}
          onChange={(e) => setBusinessHours(e.target.value)}
        />
      </HoursSection>

  
      <HoursSection>
        <label>브레이크타임</label>
        <textarea 
          value={breakTime}
          onChange={(e) => setbreakTime(e.target.value)}
        />
      </HoursSection>


      <MenuSection>
        <label>대표메뉴</label>
        <MenuScrollBox>
        {menus.map((menu, index) => (
            <div key={index}>
              <input 
                type="text" 
                name="name"
                placeholder="메뉴명"
                value={menu.name}
                onChange={e => handleMenuChange(e, index)}
              />
              <input 
                type="number" 
                name="price"
                placeholder="가격"
                value={menu.price}
                onChange={e => handleMenuChange(e, index)}
              />
            </div>
          ))}
        </MenuScrollBox>
        <button type="button"
         onClick={addMenu}
         >+</button>
      </MenuSection>

      <SubmitButton type="submit">
      최종완료
      </SubmitButton>
    </RegistContainer>
  </StMain>
)
}

export default StoreEditPage;
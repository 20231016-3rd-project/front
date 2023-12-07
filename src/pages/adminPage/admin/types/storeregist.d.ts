export interface IMenu {
    name: string;
    price: string; 
  }

  
export interface IAddressData {
    zonecode: string; // 우편번호
    address: string; // 전체 주소
    addressEnglish: string; // 전체 영문 주소
    addressType: string; // 주소 타입: R(도로명), J(지번)
    userSelectedType: string; // 사용자가 선택한 주소 타입
    noSelected: string; // 선택하지 않은 주소
    userLanguageType: string; // 사용자가 선택한 언어 타입
    roadAddress: string; // 도로명 주소
    roadAddressEnglish: string; // 도로명 영문 주소
    jibunAddress: string; // 지번 주소
    jibunAddressEnglish: string; // 지번 영문 주소
    autoRoadAddress: string; // 자동 완성된 도로명 주소
    autoJibunAddress: string; // 자동 완성된 지번 주소
    autoEnglishAddress: string; // 자동 완성된 영문 주소
    buildingCode: string; // 건물 코드
    buildingName: string; // 건물명
    apartment: string; // 아파트 여부 ('Y' 또는 'N')
    sido: string; // 시도명
    sigungu: string; // 시군구명
    sigunguCode: string; // 시군구 코드
    bcode: string; // 법정동/법정리 코드
    roadnameCode: string; // 도로명 코드
    roadname: string; // 도로명
    bname: string; // 법정동/법정리 이름
    bname1: string; // 법정리의 읍/면 이름
    bname2: string; // 법정동의 읍/면 이름
    hname: string; // 행정동명
    query: string; // 검색어
    restaurantAdmin: {
      city: string;
      district: string;
      dong: string;
      fullAd: string;
      // 다른 속성들
      // ...
    };
  }
  
  
  export interface IStoreRegistState {
    menus: IMenu[];
    files: (File | null)[];
    businessName: string;
    instagram: string;
    businessHours: string;
    addressData: IAddressData | null;
  }
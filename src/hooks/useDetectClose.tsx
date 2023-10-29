import { useEffect, useState } from 'react';

const useDetectClose = (elem, initialState) => {
  // 일단 버튼을 클릭했을때 나오는 드롭다운 메뉴 요소를 특정할 수 있도록 ref값과 초기값을 인자로 받게 설정을 해줬다.
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    console.log(isOpen);
    const onClick = (e) => {
      if (elem.current !== null && !elem.current.contains(e.target)) {
        setIsOpen(true); // 원래는 setIsOpen(!isOpen) 이 맞는 것 같은데 작동하지 않고 true를 넣어야 작동한다. 왜일까
      }
    };

    if (isOpen) {
      //그리고 만약 열린 상태라면, 전역 객체에 onClick 이벤트 핸들러를 달아주어 사용자가 클릭한 요소가 메뉴 안 요소인지 확인 후, 맞다면 닫기 상태로 변경하는 로직이다.
      window.addEventListener('click', onClick);
    }

    return () => {
      //메모리 누수 방지를 위해 mount 될 때 이벤트 핸들러를 제거해주는 것도 잊지 말자.
      window.removeEventListener('click', onClick);
    };
  }, [isOpen, elem]);
  return [isOpen, setIsOpen];
};

export default useDetectClose;

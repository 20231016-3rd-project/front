import styled, { keyframes } from 'styled-components';

interface ToggleProps {
    isDay: boolean;
    setIsDay: (isDay: boolean) => void;
  }

const Toggle: React.FC<ToggleProps> = ({ isDay, setIsDay }) => {

  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  return (
    <ToggleContainer>
      <ToggleInput
        type="checkbox"
        id="toggle--daynight"
        checked={isDay}
        onChange={toggleDayNight}
      />
      <ToggleButton htmlFor="toggle--daynight" isDay={isDay}>
        <ToggleFeature isDay={isDay}/>
      </ToggleButton>
    </ToggleContainer>
  );
};

export default Toggle;

interface ToggleButtonProps {
    isDay: boolean;
  }



const starryStar = keyframes`
  50% {
    background-color: rgba(255,255,255,0.1);
    box-shadow: #fff 30px -3px 0 0,
                #fff 12px 10px 0 -1px,
                rgba(255,255,255,0.1) 38px 18px 0 1px,
                #fff 32px 34px 0 0,
                rgba(255,255,255,0.1) 20px 24px 0 -1.5px,
                #fff 5px 38px 0 1px;
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// 스타일 컴포넌트 정의
const ToggleContainer = styled.div`
  display: block;
  text-align: center;
  margin-top: 40px;
  user-select: none;
`;

const ToggleInput = styled.input`
  display: none;
`;

const ToggleButton = styled.label<ToggleButtonProps>`
  position: relative;
  display: block;
  margin: 0 auto;
  height: 60px;
  width: 200px;
  border-radius: 70px;
  font-size: 1.4em;
  transition: all 350ms ease-in;
  cursor: pointer;

  background-color: ${({ isDay }) => isDay ? '#9ee3fb' : '#3c4145'};
  border: 5px solid ${({ isDay }) => isDay ? '#86c3d7' : '#1c1c1c'};

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 10px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    transition: all 250ms ease-in;
    background-color: ${({ isDay }) => isDay ? '#ffdf6d' : '#fff'};
    border: 5px solid ${({ isDay }) => isDay ? '#e1c348' : '#e3e3c7'};
    transform: ${({ isDay }) => isDay ? 'translateX(129px)' : 'none'};
  }

  &:after {
    content: '';
    position: absolute;
    top: 62%;
    left: 120px;
    z-index: 10;
    width: 11.2px;
    height: 11.2px;
    opacity: ${({ isDay }) => isDay ? 1 : 0};
    background-color: #fff;
    border-radius: 50%;
    box-shadow: #fff 0 0,
                #fff 3px 0,
                #fff 6px 0,
                #fff 9px 0,
                #fff 11px 0,
                #fff 14px 0,
                #fff 16px 0,
                #fff 21px -1px 0 1px,
                #fff 16px -7px 0 -2px,
                #fff 7px -7px 0 1px,
                #d3d3d3 0 0 0 4px,
                #d3d3d3 6px 0 0 4px,
                #d3d3d3 11px 0 0 4px,
                #d3d3d3 16px 0 0 4px,
                #d3d3d3 21px -1px 0 5px,
                #d3d3d3 16px -7px 0 1px,
                #d3d3d3 7px -7px 0 5px;
    transition: opacity 100ms ease-in;
    animation: ${({ isDay }) => isDay ? bounceIn : 'none'} 0.60s ease-in-out;
  }
`;

const ToggleFeature = styled.span<ToggleButtonProps>`
  display: block;
  position: absolute;
  top: 9px;
  left: 52.5%;
  z-index: 20;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: #fff 30px -3px 0 0,
              #fff 12px 10px 0 -1px,
              #fff 38px 18px 0 1px,
              #fff 32px 34px 0 0,
              #fff 20px 24px 0 -1.5px,
              #fff 5px 38px 0 1px;
  animation: ${starryStar} 5s ease-in-out infinite;
  opacity: ${({ isDay }) => isDay ? 0 : 1};
`;

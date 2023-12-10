import styled from 'styled-components';

// const Button = styled.button`
//   width: 300px;
//   height: 100px;
//   border-radius: 30px;
//   margin: auto;
// `;

export const ReviewContainer = styled.div`
  box-sizing: border-box;
  width: 95%;
  display: block;
  padding: 1rem;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const ReviewsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  h1 {
    margin-top: 6px;
    font-weight: bold;
  }
`;

export const ReviewList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoHoursBox = styled.div`
  box-sizing: border-box;
  display: block;
  width: 300px;
  height: 100px;
  gap: 1rem;
  padding: 0.5rem;

  h1 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 1rem;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const InfoHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.75rem;
`;
export const InfoAddressBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  width: 90%;
  height: auto;
  gap: 1rem;
  padding: 1rem 0 1rem 0;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  /* margin-top: 20px;
  margin-bottom: 10px; */
`;
export const InfoBottomBox = styled.div`
  display: flex;
  gap: 1rem;
`;
export const MenuHourBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoMenuBox = styled.div`
  box-sizing: border-box;
  display: block;
  width: 300px;
  margin-bottom: 10px;
  gap: 0.5rem;
  padding: 0.5rem;
  overflow-y: auto;

  h1 {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }

  div {
    margin-top: 1rem;
  }

  .menu_map {
    font-size: 1rem;
  }

  .menu_name {
    margin-right: 10px;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const RestaurantWrapper = styled.div`
  width: 80%;
  height: 100%;
  padding: 3%;
  display: flex;
  justify-content: center;
  background-color: #f1f1f1;
  gap: 2rem;
`;

export const LeftContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  width: 55%;
  min-width: 500px;

  padding: 1rem;
`;
export const RightContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  display: flex;
  width: 45%;
  min-width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  /* overflow-y: scroll; */
`;
export const RestaurantInfoLayout = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8rem;
  font-size: 1rem;
  height: 100%;

  img {
    border-radius: 16px;
    display: block;
    width: 270px;
    max-width: 100%;
    margin-bottom: 10px;
    aspect-ratio: 6 / 5;
  }
  .images__view {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .images__column {
    margin: auto;
    padding: auto;
  }
  .images__main {
    width: 540px;
    aspect-ratio: 6 / 5;
  }

  .info__title {
    font-size: 1.5rem;
    font-weight: 800;
  }
  .info_tags {
    font-size: 1rem;
    color: grey;
  }
  .info__address {
    gap: 1rem;
  }

  .info__local-address {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .info__online-address {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .info__business-hours {
    margin-bottom: 10px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .info__reviews {
    border: 2px solid black;
    width: 100%;
    padding: 20px;
  }
`;

export const LikeImg = styled.img`
  width: 20px !important;
  height: 20px;
  box-shadow: none !important;
  &:hover {
    background: white !important;
  }
  margin-bottom: 0 !important;
`;

export const Divider = styled.div`
  border: 1px solid #d9d9d9;
`;

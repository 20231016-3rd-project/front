import styled from 'styled-components';

// const Button = styled.button`
//   width: 300px;
//   height: 100px;
//   border-radius: 30px;
//   margin: auto;
// `;

export const ReviewContainer =styled.div`
   box-sizing: border-box;
   width: 1080px;
   display: block;
   padding: 1rem;
`;

export const ReviewsHeader =styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 10px;
   h1 {
    margin-top: 6px;
    font-weight: bold;
   }
`;

export const ReviewList =styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;


export const InfoHoursBox = styled.div`
    box-sizing: border-box;
    display: block;
    width: 1080px;
    height: 100px;
    gap: 1rem;
    padding: 1rem;

    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 16px;
    }

    p{ 
        font-size: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
  
`;

export const InfoAddressBox = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    width: 1080px;
    height: auto;
    margin: 1rem;
    gap: 1rem;
    
`;
export const ButtonBox = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
    
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 1080px;
`;

export const InfoMenuBox = styled.div`
    box-sizing: border-box;
    display: block;
    width: 1080px;
    margin-bottom: 10px;
    gap: 1rem;
    padding: 1rem;

    h1{
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    div {
      margin-top: 1rem;
    }

    .menu_map{
      font-size: 20px;
    }

    .menu_name{
        margin-right: 10px;
    }
`;


export const ImageSection = styled.div`
    display: flex;
    flex: 2 1 1;
    gap: 10px;
    width: 1080px;
    max-width: 100%;
`;

export const RestaurantWrapper =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RestaurantInfoLayout = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8rem;
  font-size: 1.5rem;

  img {
    display: block;
    width: 270px;
    max-width: 100%;
    margin-bottom: 10px;
    aspect-ratio: 10 / 12;
  }

  .images__column {
    margin: auto;
    padding: auto;
  }
  .images__main {
    width: 540px;
    aspect-ratio: 10 / 12;
  }


  .info__title {
    font-size: 40px;
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
  }
  .info__online-address {
  }
  .info__business-hours {
    width: 1200px;
    height: 100px;
    border: 2px solid black;
    margin-bottom: 10px;
    font-size: 1.5rem;
    box-sizing: border-box;
  }

  .info__reviews {
    border: 2px solid black;
    width: 1200px;
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
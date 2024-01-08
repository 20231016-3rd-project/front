import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../../store/rootReducer';

import { fetchMyRestaurants } from '../../../store/slices/myLikeSlice';
import MyLikeCard from './../../../components/RestaurantCard/MyLikeCard';

const MyWishListPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const myRestaurants = useSelector((state: ReducerType) => state.myLike);

  // const [datas, setDatas] = useState<Restaurants>([]);
  // const data: Restaurants = [];

  useEffect(() => {
    // const getMyDatas = async () => {
    //   dispatch(
    //     getMyRestaurants(
    //       await myRestaurant().then((response) => {
    //         console.log(response);
    //         return response;
    //       })
    //     )
    //   );
    // };
    // getMyDatas();
    dispatch(fetchMyRestaurants());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.scrollIntoView();
    }
  }, []);

  return (
    <>
      <Section>
        <SectionTitle2>나의 좋아요 리스트</SectionTitle2>
        <ul>{!isLoading && <MyLikeCard datas={myRestaurants.myLikeInfo} />}</ul>
        {/* <Pagination /> */}
      </Section>
    </>
  );
};

export default MyWishListPage;

const Section = styled.div`
  padding: 80px 15% 20px;
`;
const SectionTitle2 = styled.div`
  color: #ff792a;
  font-size: 32px;
  font-weight: 600;
  margin: 1rem;
`;

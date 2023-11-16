import { useEffect } from 'react';

import styled from 'styled-components';

import { myRestaurant } from '../../../apis/getRestaurantApi/getRestaurant';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../../store/rootReducer';

import { getMyRestaurants } from '../../../store/slices/myLikeSlice';
import MyLikeCard from './../../../components/RestaurantCard/MyLikeCard';

const MyWishListPage = () => {
  const dispatch = useDispatch();

  const myRestaurants = useSelector(
    (state: ReducerType) => state.myLike.myLikeInfo
  );

  // const [datas, setDatas] = useState<Restaurants>([]);
  // const data: Restaurants = [];

  useEffect(() => {
    const getMyDatas = async () => {
      dispatch(
        getMyRestaurants(
          await myRestaurant().then((response) => {
            console.log(response);
            return response;
          })
        )
      );
    };
    getMyDatas();
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
        <ul>
          <MyLikeCard datas={myRestaurants} />
        </ul>
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

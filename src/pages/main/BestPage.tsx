import { useEffect } from 'react';

import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../store/rootReducer';
import { fetchBestRestaurants } from '../../store/slices/bestSlice';
import { useLocation } from 'react-router-dom';

const BestPage = () => {
  const dispatch = useDispatch();

  const bestRestaurants = useSelector(
    (state: ReducerType) => state.best.bestInfo
  );
  const location = useLocation();
  const key = location.state.key;

  // const [datas, setDatas] = useState<Restaurants>([]);
  // const data: Restaurants = [];

  useEffect(() => {
    // const getBestDatas = async () => {
    //   if (key === ('떡볶이' || '라멘' || '파스타' || '피자')) {
    //     dispatch(
    //       getBestRestaurants(
    //         await bestRestaurant(key).then((response) => {
    //           console.log(response);
    //           return response.content;
    //         })
    //       )
    //     );
    //   } else {
    //     dispatch(
    //       getBestRestaurants(
    //         await bestRestaurantAddr(key).then((response) => {
    //           console.log(response);
    //           return response.content;
    //         })
    //       )
    //     );
    //   }
    // };
    // getBestDatas();
    dispatch(fetchBestRestaurants(key));
  }, []);

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.scrollIntoView();
    }
  }, []);

  let contents;
  if (!bestRestaurants) {
    contents = '검색 결과가 없습니다.';
  } else {
    contents = (
      <>
        <ul>
          <RestaurantCard datas={bestRestaurants} />
        </ul>
        {/* <Pagination /> */}
      </>
    );
  }

  return (
    <>
      <SectionTitle2>{key} 맛집</SectionTitle2>
      <Section>{contents}</Section>
    </>
  );
};

export default BestPage;

const Section = styled.div`
  padding: 80px 15% 20px;
`;
const SectionTitle2 = styled.div`
  color: #ff792a;
  font-size: 32px;
  font-weight: 600;
  margin: 0 15%;
`;

import React, { useEffect } from 'react';
import OrderByButton from '../../../components/Buttons/OrderByButton';

import RestaurantCard from '../../../components/RestaurantCard/RestaurantCard';
import styled from 'styled-components';

import {
  myRestaurant,
  searchRestaurant,
} from '../../../apis/getRestaurantApi/getRestaurant';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../../store/rootReducer';
import { getSearchRestaurants } from '../../../store/slices/restaurantSlice';
import Pagination from '../../../components/Pagination/Pagination';
import { getSort } from '../../../store/slices/sortSlice';
import { setIsOpen } from '../../../store/slices/modalSlice';
import RegionSelect from '../../../components/Modal/RegionSelect';
import { getMyRestaurants } from '../../../store/slices/myLikeSlice';

const MyWishListPage = () => {
  const dispatch = useDispatch();

  const sort = useSelector((state: ReducerType) => state.sort.sortInfo);

  const myRestaurants = useSelector(
    (state: ReducerType) => state.mylike.myLikeInfo
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
    document.getElementById('root').scrollIntoView();
  }, []);

  return (
    <>
      <Section>

        <ul>
          <RestaurantCard datas={myRestaurants} />
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

import React, { useEffect } from 'react';
import OrderByButton from '../../components/Buttons/OrderByButton';

import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import styled from 'styled-components';

import { searchRestaurant } from '../../apis/getRestaurantApi/getRestaurant';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../store/rootReducer';
import { getSearchRestaurants } from '../../store/slices/restaurantSlice';
import Pagination from './../../components/Pagination/Pagination';
import { getSort } from '../../store/slices/sortSlice';
import { setIsOpen } from '../../store/slices/modalSlice';
import RegionSelect from '../../components/Modal/RegionSelect';

const DetialPage = () => {
  const dispatch = useDispatch();

  const restaurants = useSelector(
    (state: ReducerType) => state.restaurant.restInfo
  );
  const region = useSelector((state: ReducerType) => state.region.regionInfo);
  const sort = useSelector((state: ReducerType) => state.sort.sortInfo);
  const isOpen = useSelector((state: ReducerType) => state.modal.openInfo);
  const keyword = useSelector((state: ReducerType) => state.keyword.keyword);

  // const [datas, setDatas] = useState<Restaurants>([]);
  // const data: Restaurants = [];

  useEffect(() => {
    const getSearchedDatas = async () => {
      dispatch(
        getSearchRestaurants(
          await searchRestaurant(
            keyword,
            1,
            region.city,
            region.district,
            region.dong,
            sort
          ).then((response) => {
            return response.content;
          })
        )
      );
    };
    getSearchedDatas();
  }, [region, keyword, sort]);

  const handleOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(getSort(e.currentTarget.value));
  };

useEffect(() => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.scrollIntoView();
  }
}, []);

  const openModalHandler = () => {
    dispatch(setIsOpen(true));
  };

  return (
    <>
      {isOpen && <RegionSelect />}
      <Section>
        <ButtonsDiv>
          <OrderByButton
            orderBy={sort}
            standard="rateDesc"
            handleOrder={handleOrder}
          />
          <OrderByButton
            orderBy={sort}
            standard="review"
            handleOrder={handleOrder}
          />
          <OrderByButton
            orderBy={sort}
            standard="like"
            handleOrder={handleOrder}
          />
          <SelectRegionButton onClick={openModalHandler}>
            지역선택
          </SelectRegionButton>
        </ButtonsDiv>

        <ul>
          <RestaurantCard datas={restaurants} />
        </ul>
        <Pagination />
      </Section>
    </>
  );
};

export default DetialPage;

const Section = styled.div`
   padding: 40px 4% 20px; 
`;
const ButtonsDiv = styled.div`
  margin: 0 2rem;
`;
const SelectRegionButton = styled.button`
  border-radius: 6px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.7px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;

  border: 1px solid black;
`;

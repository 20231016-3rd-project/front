import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import first from '/src/assets/images/first.gif';
import prev from '/src/assets/images/prev.gif';
import next from '/src/assets/images/next.gif';
import end from '/src/assets/images/end.gif';
import { getSearchRestaurants } from '../../store/slices/restaurantSlice';
import { searchRestaurant } from '../../apis/getRestaurantApi/getRestaurant';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../store/rootReducer';

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const dispatch = useDispatch();

  const region = useSelector((state: ReducerType) => state.region.regionInfo);
  const sort = useSelector((state: ReducerType) => state.sort.sortInfo);
  const keyword = useSelector((state: ReducerType) => state.keyword.keyword);

  const getMaxPage = async () => {
    await searchRestaurant(
      keyword,
      1,
      region.city,
      region.district,
      region.dong,
      sort
    ).then((response) => {
      setMaxPage(response.totalPages);
    });
  };

  useEffect(() => {
    const getSearchedDatas = async () => {
      dispatch(
        getSearchRestaurants(
          await searchRestaurant(
            keyword,
            page,
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
    getMaxPage();
  }, [page]);

  //리스트 정렬

  const changePage = (e) => {
    setPage(Number(e.target.value));
  };

  const changePagination = (e) => {
    switch (e.target.value) {
      case 'first':
        setPage(1);
        break;
      case 'prev':
        setPage((prev) => prev - 1);
        break;
      case 'next':
        setPage((prev) => prev + 1);
        break;
      case 'end':
        setPage(maxPage);
        break;
    }
  };

  const renderPagination = () => {
    const result = [];
    for (let i = 0; i < maxPage; i++) {
      if (i === 0) {
        result.push(
          <PaginationLiFirst key="1">
            <PageBtn
              className={page === 1 ? 'selected' : 'num'}
              value={1}
              onClick={changePage}
            >
              1
            </PageBtn>
          </PaginationLiFirst>
        );
      } else {
        result.push(
          <PaginationLi key={i + 1}>
            <PageBtn
              className={page === i + 1 ? 'selected' : 'num'}
              value={i + 1}
              onClick={changePage}
            >
              {i + 1}
            </PageBtn>
          </PaginationLi>
        );
      }
    }
    return result;
  };

  useEffect(() => {}, []);

  return (
    <PaginationStyle>
      <PageFirst
        value="first"
        onClick={changePagination}
        disabled={page === 1 ? true : false}
      ></PageFirst>
      <PagePrev
        value="prev"
        onClick={changePagination}
        disabled={page === 1 ? true : false}
      ></PagePrev>
      <PaginationOl>{renderPagination()}</PaginationOl>
      <PageNext
        value="next"
        onClick={changePagination}
        disabled={page === maxPage ? true : false}
      ></PageNext>
      <PageEnd
        value="end"
        onClick={changePagination}
        disabled={page === maxPage ? true : false}
      ></PageEnd>
    </PaginationStyle>
  );
};

export default Pagination;

const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
const PaginationOl = styled.ol`
  display: flex;
  font-weight: bold;
  font-size: 12px;
  color: #939393;
`;
const PaginationLi = styled.li`
  display: inline-block;
  width: 32px;
  border: 1px solid #d7d5d5;
  border-left: none;
  text-align: center;
  height: 32px;
`;
const PaginationLiFirst = styled.div`
  display: inline-block;
  width: 32px;
  border: 1px solid #d7d5d5;
  text-align: center;
`;
const PageBtn = styled.button`
  border: none;
  background: white;
  width: 100%;
  height: 2rem;
  cursor: pointer;
  &.num {
    color: #9393af;
  }
  &.selected {
    border-bottom: 3px solid black;
    color: black;
    line-height: 2.3;
  }
`;
const PageFirst = styled.button`
  border: none;
  border: 1px solid #d7d5d5;
  width: 34px;
  background-image: url(${first});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
const PagePrev = styled.button`
  border: none;
  border-top: 1px solid #d7d5d5;
  border-bottom: 1px solid #d7d5d5;
  width: 34px;
  background-image: url(${prev});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
const PageNext = styled.button`
  border: none;
  border-top: 1px solid #d7d5d5;
  border-bottom: 1px solid #d7d5d5;
  width: 34px;
  background-image: url(${next});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
const PageEnd = styled.button`
  border: none;
  border: 1px solid #d7d5d5;
  width: 34px;
  background-image: url(${end});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

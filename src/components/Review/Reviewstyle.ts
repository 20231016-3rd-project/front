import styled from 'styled-components';

export const LikeButtonBox = styled.div`
    display: flex;
    margin-right: 10px;
`;

export const LikeButton = styled.button`
  display: inline-block;
  position: relative;
  font-size: 0.8rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  &:focus {
    border: None;
  }
  // border: 1px solid black;
  &::before {
    font-size: 2em;
    color: #000;
    content: '♥︎';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%, -57%);
  }
  &::after {
    font-size: 2em;
    color: #ff3252;
    content: '♥';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%, -57%) scale(0);
    transition: transform 0.2s;
  }
  &.liked::after {
    transform: translate(0%, -57%) scale(1.2);
  }
`;

export const ReviewLayout = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  .review__header {
    display: flex;
    justify-content: space-between;
  }
  .review__profile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .profile__image img {
    margin-top: 5px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .profile__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
  }
  .profile__name {
    margin-top: 5px;
    font-size: large;
  }

  .review__stars {
  }
  .review__buttons {
    align-items: center;
    button {
      width: 60px;
      height: 30px;
    }
    display: flex;
    gap: 1rem;
  }

  
  .review__text {
    font-size: 1.25rem;
    height: 70px;
  }
  .review__images {
    margin
    padding: 10px;

    img {
      width: 100px;
      height: 100px;
      cursor: pointer;
    }
    img:hover {
    }
  }
`;

export const ReviewButton = styled.button`
      border: none;
      border-radius: 10px;
      margin-right: 10px;
`;
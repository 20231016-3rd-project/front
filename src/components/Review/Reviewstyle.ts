import styled from 'styled-components';

export const LikeButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #f91880;
    .icon-box {
      background-color: rgba(249, 24, 136, 0.3);
    }
  }
  .icon-box {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease;
  }

  .count-box {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    transition: all 0.5s ease;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const LikeButton = styled.button`
  display: inline-block;
  position: relative;
  font-size: 0.8rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  &:hover {
    background-color: #ff3252;
    color: #ff3252;
  }

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
  padding: 0.5rem;
  border-radius: 0.5rem;
  min-width: 350px;
  .review__header {
    display: flex;
    justify-content: space-between;
  }
  .review__profile {
    display: flex;
    gap: 0.5rem;
  }
  .profile__image img {
    margin-top: 5px;
    width: 3rem;
    height: 3rem;
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
    font-size: 1rem;
  }

  .review__stars {
    display: flex;
    flex-direction: column;
  }
  .review__buttons {
    align-items: center;
    button {
      width: 60px;
      height: 30px;
    }
    display: flex;
    gap: 0.625rem;
  }

  .review__text {
    font-size: 0.75rem;
    padding-top: 1rem;
  }
  .review__images {
    padding: 10px;
    display: flex;
    gap: 0.5rem;
    img {
      width: 100px;
      height: 100px;
      cursor: pointer;
      border-radius: 0.5rem;
    }
    img:hover {
      transform: scale(1.02);
    }
  }
`;

export const ReviewButton = styled.button`
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

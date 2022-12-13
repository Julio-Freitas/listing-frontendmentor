import styled, { keyframes } from 'styled-components';

export const ListCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Loading = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5rem;
`;

const loadginData = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(180, 8%, 52%);
  }
`;

export const LoadingCard = styled.div`
  display: flex;
  gap: 5px;
  padding: 25px;
  border: 5px transparent solid;
  border-left-color: ${({ theme }) =>
    theme.colors.secondary.lightGrayishCyanFilter};
  padding: 4.5rem;
  width: 100%;
  flex: 1;

  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  animation: ${loadginData} 1.5s linear infinite alternate;
`;

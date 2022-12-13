import styled from 'styled-components';

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.primary.darkCyan};
  width: 100%;
  height: 124px;
  position: relative;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;

  div:first-child {
    background-image: url('/images/bg-header-desktop.svg');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const WrapperTagsFilter = styled.ul`
  position: absolute;
  display: flex;
  width: 96%;
  background: #fff;
  padding: 1.5rem;
  bottom: -0.5rem;
  margin: 0 auto;
  gap: 2.5rem;
`;

export const TagsFilter = styled.li`
  font-size: 1.5rem;
  padding: 0.8rem 0.5rem;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  gap: 1rem;
  position: relative;
  background: ${({ theme }) => theme.colors.primary.darkCyan};
  color: ${({ theme }) => theme.colors.secondary.lightGrayishCyanBackground};

  :hover {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  :hover::after {
    transition: all 0.5s;
    content: '';
    background-image: url(images/icon-remove.svg);
    width: 20px;
    height: 100%;
    background-size: auto;
    background-repeat: no-repeat;
    background-color: #000;
    position: absolute;
    right: -20px;
    background-position: center;
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;

import styled from 'styled-components';

export const Card = styled.li<{ hasBorder: boolean }>`
  display: flex;
  gap: 5px;
  padding: 25px;
  border: 5px transparent solid;
  border-left-color: ${({ theme, hasBorder }) =>
    hasBorder && theme.colors.primary.darkCyan};
  height: 115px;
  background: #fff;
  align-items: center;
`;

export const Content = styled.div`
  align-self: baseline;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 25px;
  flex: 1;
  h2 {
    font-size: 1.6rem;
  }
`;

export const Header = styled.header`
  font-weight: 600;
  display: inline-flex;
  gap: 15px;
  align-items: center;

  label {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary.darkCyan};
    font-weight: 600;
  }
`;

export const Tag = styled.span<{ bgColor: string }>`
  font-size: 1.2rem;
  background: ${({ bgColor }) => bgColor};
  padding: 0.4rem 0.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ::before {
    content: attr(data-text);
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary.lightGrayishCyanFilter};
    position: relative;
    top: 1px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
`;

export const TextSpan = styled.span<{ hasBall?: boolean }>`
  font-size: 1.2rem;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  :first-child {
    justify-content: start;
    gap: 25%;
  }

  ${({ hasBall }) =>
    hasBall &&
    `
     :after {
      content: ' ';
      display: inline-flex;
      width: .4rem;
      height: .4rem;
      border-radius: 50%;

    }
  `}

  :after {
    background: ${({ theme }) => theme.colors.secondary.darkGrayishCyanFilter};
  }
`;

export const Skills = styled.div`
  flex: 1;
  display: inline-flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const Skill = styled.div<{ select: boolean }>`
  font-size: 1.5rem;
  background: ${({ theme }) =>
    theme.colors.secondary.lightGrayishCyanBackground};
  color: ${({ theme }) => theme.colors.primary.darkCyan};
  font-weight: 600;
  padding: 0.5rem;
  width: fit-content;
  cursor: pointer;
  border-radius: 0.3rem;
  transition: all 0.5s;

  background: ${({ theme, select }) => select && theme.colors.primary.darkCyan};
  color: ${({ theme, select }) =>
    select && theme.colors.secondary.lightGrayishCyanBackground};

  :hover {
    background: ${({ theme }) => theme.colors.primary.darkCyan};
    color: ${({ theme }) => theme.colors.secondary.lightGrayishCyanBackground};
  }
`;

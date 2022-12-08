import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  height: 60px;
  padding: 15px 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-background-color);

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    height: 80px;
    width: 768px;
    padding: 20px 32px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: 1280px;
    padding: 20px 16px;
  }
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  padding-right: 20px;
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Divider = styled.div`
  width: 1px;
  height: 30px;
  margin: 0 12px;
  background-color: #bdbdbd;
`;
export const UserName = styled.span`
  display: flex;
  align-items: center;
  font-family: 'Circe';
  font-size: 18px;
  color: #bdbdbd;
`;

export const LogoExit = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;

export const LogoutBtn = styled.button`
  font-family: 'Circe';
  font-size: 18px;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  padding: 4px 0;
  border-color: transparent;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:active),
  &:focus-visible:not(:active) {
    color: var(--accent-color-grean);
    background: rgba(177, 186, 196, 0.12);
  }

  @media screen and (max-width: 767px) {
    padding: 4px 8px;
  }
`;

export const LogoText = styled.span`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 20px;
  line-height: 35px;
  color: var(--primary-text-color);

  @media screen and (min-width: 767px) {
    line-height: 45px;
    font-size: 30px;
  }
`;

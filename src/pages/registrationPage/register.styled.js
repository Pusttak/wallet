import styled from 'styled-components';
import desktop from '../../images/bg-desktop-login/ellipse.png';
import ellipseUp from '../../images/bg-tablet-login/ellipse-up.png';
import frameTabl from '../../images/bg-img-register/frame-tabl.png';

import frameDask from '../../images/bg-desktop-login/rectangle.png';
import ellipDesk from '../../images/bg-desktop-login/ellipse.png';
import desktopImg from '../../images/bg-img-register/desktop.png';

export const ContainerWrapper = styled.div`
  position: relative;
  background-color: #e7eaf2;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 768px;
    height: 1024px;

    background-image: url(${desktop}), url(${ellipseUp}), url(${frameTabl});

    background-repeat: no-repeat;
    background-position: bottom 0 left 0, top 0 right 0, top 60px left 114px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 720px;

    background-image: url(${desktopImg}), url(${ellipDesk}), url(${frameDask});

    background-repeat: no-repeat;
    background-position: top 153px left 66px, bottom 0 left 0, top 0 right 0;
  }
`;

export const PageText = styled.p`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 163px;
    right: 153px;

    font-family: Poppins;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;

    display: inline-block;

    color: #000000;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 597px;
    left: 200px;
  }
`;

import styled from 'styled-components';

import ellipseDown from '../../images/bg-tablet-login/ellipse-down.png';
import ellipseUp from '../../images/bg-tablet-login/ellipse-up.png';
import ellipseDownX from '../../images/bg-tablet-login/ellipse-down@2x.png';
import ellipseUpX from '../../images/bg-tablet-login/ellipse-up@2x.png';
import ellipseDownDesktop from '../../images/bg-desktop-login/ellipse.png';
import ellipseUpDesktop from '../../images/bg-desktop-login/ellipse-up-desktop.png';
import ellipseDownDesktopX from '../../images/bg-desktop-login/ellipse@2x.png';
import ellipseUpDesktopX from '../../images/bg-desktop-login/ellipse-up-desktop@2x.png';

export const ContainerDashboard = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const Container = styled.div`

           margin-left: auto;
           margin-right: auto;
           padding: 0px 20px;
           width: 100%;
            

  @media screen and (min-width: 480px) {
    width: 480px;
  }

           @media screen and (min-width: 768px) {
             padding: 0px 32px;
             width: 768px;
           }

           @media screen and (min-width: 1280px) {
             width: 1280px;
             padding: 0px 16px;
           }
         }
       `;

export const MainPage = styled.main`
background-color: var(--secondary-background-color);

min-height: calc(100vh - 85px);

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;

    background-image:  url(${ellipseDown}), url(${ellipseUp});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      .main {
        background-image: url(${ellipseDownX}), url(${ellipseUpX});
      }
    }
      background-position: bottom 0 left 0, top 0 right 0, top 60px left 114px;
    }

    @media screen and (min-width: 1280px) {
     
      

        url(${ellipseDownDesktop}),
        url(${ellipseUpDesktop});

      @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
        .main {
            url(${ellipseDownDesktopX}),
            url(${ellipseUpDesktopX});
        }
      }
     `;

export const Section = styled.section`
  @media screen and (max-width: 767px) {
    padding-top: 68px;
  }
  padding-bottom: 30px;
  min-height: calc(100vh - 85px);
  background: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)
  );

  @media screen and (min-width: 768px) {
    backdrop-filter: blur(25px);
    background-size: cover;
  }
`;

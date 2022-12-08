import { StyledNavLink, NavList, NavStyled } from './navigation.styled';
import sprite from '../../images/svg/symbol-defs.svg';
import Media from 'react-media';

const Navigation = () => {
  return (
    <NavStyled>
      <NavList>
        <li>
          <StyledNavLink to="homeTab" aria-label="home">
            <svg>
              <use href={`${sprite}#icon-home`} />
            </svg>
            <Media query="(min-width: 768px)" render={() => <p>Home</p>} />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="diagramTab" aria-label="diagramTab">
            <svg>
              <use href={`${sprite}#icon-diagrama`} />
            </svg>

            <Media
              query="(min-width: 768px)"
              render={() => <p>Statistics</p>}
            />
          </StyledNavLink>
        </li>
        <li>
          <Media
            query="(max-width: 767px)"
            render={() => (
              <StyledNavLink to="currency" aria-label="currency">
                <svg>
                  <use href={`${sprite}#icon-currency`} />
                </svg>
              </StyledNavLink>
            )}
          />
        </li>
      </NavList>
    </NavStyled>
  );
};

export default Navigation;

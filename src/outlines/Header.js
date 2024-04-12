import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FontSize from '../styles/FontSize';
import classNames from 'classnames';
import { color } from '../styles/Color';
import logo from '../images/logo.png';
import { FaSearch } from 'react-icons/fa';

const { primary, dark, light } = color;

const HeaderBox = styled.header`
  .site-top {
    background: #f8f8f8;
    border-bottom: 1px solid #d5d5d5;
    height: 35px;

    div {
      text-align: right;
      a {
        display: inline-block;
        line-height: 34px;
        margin-left: 10px;
        font-size: ${FontSize.normal};

        &.on {
          color: ${color.primary};
        }
      }
    }
  }

  .logo-search {
    div {
      display: flex;
      justify-content: space-between;
      height: 150px;
      align-items: center;

      form {
        display: flex;
        height: 45px;
        width: 380px;

        button {
          width: 45px;
        }
        input[type='text'] {
          flex-grow: 1;
        }
      }
    }
    img {
      width: 242px;
    }
  }
`;

const Header = () => {
  const { t } = useTranslation(); //t -> 메시지 조회
  return (
    <HeaderBox>
      <section className="site-top">
        <div className="layout-width">
          {/**index.css에서 공통 너비 적용해줌 */}
          <NavLink
            to="/member/join"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('회원가입')}
          </NavLink>
          <NavLink
            to="/member/login"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('로그인')}
          </NavLink>
        </div>
      </section>
      <section className="logo-search">
        <div className="layout-width">
          <Link to="/">
            <img src={logo} alt={t('로고')}></img>
          </Link>

          <form autoComplete="off">
            <input type="text" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </section>
    </HeaderBox>
  );
};

export default React.memo(Header);

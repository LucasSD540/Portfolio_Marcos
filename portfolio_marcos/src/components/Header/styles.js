import styled from "styled-components";

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background-color: #303030;
  box-shadow: 0px 18px 31px 1px rgba(0, 0, 0, 0.3);

  nav {
    height: 80px;
    max-width: 960px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    .title-logo {
      font-size: 32px;
    }

    a {
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      color: #0088ff;
      transition: 0.5s;
    }

    .link-items {
      display: flex;

      .link-item {
        margin-left: 16px;
      }
    }
  }

  .responsive-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 40%;
    width: 100%;
    background-color: #3e3e3e;
    padding-top: 24px;

    a {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 768px) {
    nav {
      .link-items {
        display: none;
        .link-item {
          display: none;
        }
      }
    }
  }

  @media (min-width: 769px) {
    .menu {
      display: none;
    }
  }
`;

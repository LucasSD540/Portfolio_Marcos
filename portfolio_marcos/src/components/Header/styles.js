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
      font-size: 24px;
      font-weight: bold;
      background: transparent;
      border: none;
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
`;

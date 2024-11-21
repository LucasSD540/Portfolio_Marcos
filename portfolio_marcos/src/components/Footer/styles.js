import styled from "styled-components";

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  height: 200px;
  width: 100%;
  background-color: #1f9cf0;

  .flex-div {
    display: flex;
    justify-content: space-between;

    .dev-div {
      h3 {
        text-align: center;
        font-size: 32px;
      }

      p {
        margin-top: 12px;
        font-size: 20px;
        font-weight: bold;
      }
    }

    .nav-div {
      display: flex;
      align-items: center;

      a {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        margin-right: 16px;
      }

      .social-links-div {
        margin-left: 24px;

        .center {
          margin: 0 16px;
        }
      }
    }
  }

  .rights-div {
    p {
      text-align: center;
      margin-top: 40px;
    }
  }
`;

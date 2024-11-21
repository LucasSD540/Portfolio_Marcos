import styled from "styled-components";

export const CardDiv = styled.div`
  height: 200px;
  max-width: 300px;
  width: 100%;
  background-color: #000;
  border-radius: 20px;
  padding: 32px;

  .title {
    display: flex;
    align-items: center;
    margin: 48px 0 16px 0;

    img {
      margin-right: 16px;
    }
  }

  .card-title {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    color: #1f9cf0;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`;

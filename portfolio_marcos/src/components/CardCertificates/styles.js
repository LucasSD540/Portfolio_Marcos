import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #1f9cf0;
  max-width: 280px;
  width: 100%;
  height: 180px;
  border-radius: 20px;
  padding: 32px;

  .card-title {
    text-align: center;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
  }

  .tech_icon {
    height: 24px;
    max-width: 24px;
  }

  .exit_icon {
    margin-right: 8px;
  }

  a {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-weight: bold;
    }
  }
`;

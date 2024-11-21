import styled from "styled-components";

export const CardDiv = styled.div`
  padding: 32px;
  background-color: #000;
  height: 300px;
  max-width: 200px;
  width: 100%;
  border-radius: 20px;

  img {
    height: 120px;
    width: 100%;
    margin-bottom: 32px;
  }

  p {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

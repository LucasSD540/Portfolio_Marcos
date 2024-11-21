import * as S from "./styles";

export const CardTech = ({ cardName, cardImage }) => {
  return (
    <S.CardDiv>
      <img src={cardImage} alt="" />
      <p>{cardName}</p>
    </S.CardDiv>
  );
};

import exit from "../../assets/images/exit_icon.png";
import * as S from "./styles";

export const CardServices = ({ cardName, cardImage }) => {
  return (
    <S.CardDiv>
      <div className="title">
        <img src={cardImage} alt="" />
        <p className="card-title">{cardName}</p>
      </div>
      <a href="#section-interest">
        <button>
          <img src={exit} alt="" />
          <p>Veja mais</p>
        </button>
      </a>
    </S.CardDiv>
  );
};

import exit from "../../assets/images/exit.png";
import * as S from "./styles";

export const CardCertificates = ({
  cardName,
  cardImage,
  cardAdress,
  cardDownload,
}) => {
  return (
    <S.CardDiv>
      <p className="card-title">{cardName}</p>
      <img className="tech_icon" src={cardImage} alt="" />
      <a href={cardAdress}>
        <img className="exit_icon" download={cardDownload} src={exit} alt="" />
        <p>Veja o Certificado</p>
      </a>
    </S.CardDiv>
  );
};

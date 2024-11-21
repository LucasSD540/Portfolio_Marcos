import logo from "../../assets/images/logo.png";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderDiv>
      <div className="container">
        <nav>
          <h2 className="title-logo">
            <a href="#section-hello">
              <img src={logo} alt="" />
            </a>
          </h2>
          <div className="link-items">
            <a className="link-item" href="#section-hello">
              Início
            </a>
            <a className="link-item" href="#section-about">
              Sobre Mim
            </a>

            <a className="link-item" href="#section-skills">
              Ferramentas
            </a>

            <a className="link-item" href="#section-services">
              Serviços
            </a>
            <a className="link-item" href="#section-contact">
              Contato
            </a>
          </div>
        </nav>
      </div>
    </S.HeaderDiv>
  );
};

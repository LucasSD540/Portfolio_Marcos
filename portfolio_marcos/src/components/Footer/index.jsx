import insta from "../../assets/images/insta.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.FooterDiv>
      <div className="container">
        <div className="flex-div">
          <div className="dev-div">
            <h3>Marcos</h3>
            <p>Desenvolvedor Full Stack</p>
          </div>
          <div className="nav-div">
            <a href="#section-hello">Início</a>
            <a href="#section-about">Sobre mim</a>
            <a href="#section-skills">Ferramentas</a>
            <a href="#section-services">Serviços</a>
            <div className="social-links-div">
              <img src={insta} alt="" />
              <img className="center" src={github} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="rights-div">
          <p>© 2024 Marcos - Todos os direitos reservados</p>
        </div>
      </div>
    </S.FooterDiv>
  );
};

import hi from "../../assets/images/hi_icon.png";
import download from "../../assets/images/download_icon.png";
import dev from "../../assets/images/dev_image.png";
import java from "../../assets/images/java.png";
import react from "../../assets/images/react.png";
import mysql from "../../assets/images/mysql.png";
import vscode from "../../assets/images/vscode.png";
import java_icon from "../../assets/images/java_icon.png";
import database_icon from "../../assets/images/database_icon.png";
import code_icon from "../../assets/images/code_icon.png";
import profile from "../../assets/images/profile.png";
import telephone from "../../assets/images/telephone.png";
import mail from "../../assets/images/mail.png";
import insta from "../../assets/images/insta.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import * as S from "./styles";
import { CardTech } from "../CardTech";
import { CardServices } from "../CardServices";

export const Main = () => {
  return (
    <S.MainDiv className="container">
      <div id="section-hello">
        <div className="div-1-hello">
          <div className="title-div">
            <img src={hi} alt="" />
            <h2>Olá, me chamo Marcos!</h2>
          </div>
          <p>
            Sou um desenvolvedor full stack com especialização em back-end,
            possuindo sólida experiência em diversas tecnologias do setor
          </p>
        </div>
        <div className="div-2-hello">
          <img src={dev} alt="" />
        </div>
      </div>
      <div id="section-about">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-info">
          <div className="div-1-about">
            <p>
              Sou desenvolvedor full stack com foco em back-end, apaixonado por
              criar soluções eficientes e escaláveis. Tenho experiência sólida
              com Java, que utilizo para construir aplicações robustas, e no
              front-end trabalho com React para desenvolver interfaces modernas
              e intuitivas. Também sou especializado em bancos de dados MySQL,
              garantindo estruturas confiáveis e bem otimizadas. Meu fluxo de
              trabalho é aprimorado pelo uso do Visual Studio Code, uma
              ferramenta que me ajuda a manter a produtividade e a qualidade do
              código. Estou sempre em busca de novos desafios para aprimorar
              minhas habilidades e entregar projetos que façam a diferença.
            </p>
          </div>
          <div className="div-2-about">
            <div className="div-statistics">
              <div className="statistics-item">
                <p className="statistics-number">02+</p>
                <p className="statistics-title">Anos de experiência</p>
              </div>
              <div className="statistics-item">
                <p className="statistics-number">10+</p>
                <p className="statistics-title">Projetos realizados</p>
              </div>
              <div className="statistics-item">
                <p className="statistics-number">07+</p>
                <p className="statistics-title">Certificados e cursos</p>
              </div>
            </div>
            <button>
              <img src={download} alt="" />
              <p>Baixar currículo</p>
            </button>
          </div>
        </div>
      </div>
      <div id="section-skills">
        <h2 className="section-title">Ferramentas</h2>
        <div className="card-div">
          <CardTech cardName="Java" cardImage={java} />
          <CardTech cardName="ReactJs" cardImage={react} />
          <CardTech cardName="MySQL" cardImage={mysql} />
          <CardTech cardName="VS Code" cardImage={vscode} />
        </div>
      </div>
      <div id="section-services">
        <h2 className="section-title">Serviços</h2>
        <div className="card-div">
          <CardServices cardName="Back-End" cardImage={java_icon} />
          <CardServices cardName="Banco de dados" cardImage={database_icon} />
          <CardServices cardName="Front-End" cardImage={code_icon} />
        </div>
      </div>
      <div id="section-interest">
        <h2 className="section-title">Se interessou?</h2>
        <div className="form-div">
          <div className="div-1-interest">
            <input type="text" placeholder="Nome *" />
            <input className="email-input" type="text" placeholder="E-mail *" />
            <input type="text" placeholder="Telefone *" />
          </div>
          <div className="div-2-interest">
            <textarea placeholder="Sua mensagem *" name="" id=""></textarea>
          </div>
        </div>
      </div>
      <div id="section-contact">
        <h2 className="section-title">Contato</h2>
        <div className="contact-div">
          <div className="contact-div-1">
            <div className="contact-item">
              <img src={profile} alt="" />
              <p>Marcos</p>
            </div>
            <div className="contact-item center">
              <img src={telephone} alt="" />
              <p>61 9 9999-9999</p>
            </div>
            <div className="contact-item">
              <img src={mail} alt="" />
              <p>marcos@marcos.com</p>
            </div>
          </div>
          <div className="contact-div-2">
            <div className="contact-item">
              <img src={insta} alt="" />
              <p>@marcosdev</p>
            </div>
            <div className="contact-item center">
              <img src={github} alt="" />
              <p>@marcosdev</p>
            </div>
            <div className="contact-item">
              <img src={linkedin} alt="" />
              <p>@marcosdev</p>
            </div>
          </div>
        </div>
      </div>
    </S.MainDiv>
  );
};

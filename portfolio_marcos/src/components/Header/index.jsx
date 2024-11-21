import { useState } from "react";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.png";
import close from "../../assets/images/close.png";
import * as S from "./styles";

export const Header = () => {
  const [menuDiv, setMenuDiv] = useState(false);

  const handleMenu = () => {
    setMenuDiv(!menuDiv);
  };

  return (
    <S.HeaderDiv>
      <div className="container">
        <nav>
          <a href="#section-hello">
            <img src={logo} alt="" />
          </a>
          {menuDiv ? (
            <img
              onClick={() => handleMenu()}
              className="close-icon"
              src={close}
              alt="Ícone de fechar"
            />
          ) : (
            <img
              onClick={() => handleMenu()}
              className="menu"
              src={menu}
              alt="Ícone de menu"
            />
          )}
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
            <a className="link-item" href="#section-certificates">
              Certificados
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
      {menuDiv && (
        <div className="responsive-menu">
          <a
            onClick={() => handleMenu()}
            className="link-item"
            href="#section-hello"
          >
            Início
          </a>
          <a
            onClick={() => handleMenu()}
            className="link-item"
            href="#section-about"
          >
            Sobre Mim
          </a>

          <a
            onClick={() => handleMenu()}
            className="link-item"
            href="#section-skills"
          >
            Ferramentas
          </a>

          <a
            onClick={() => handleMenu()}
            className="link-item"
            href="#section-certificates"
          >
            Certificados
          </a>
          <a
            onClick={() => handleMenu()}
            className="link-item"
            href="#section-services"
          >
            Serviços
          </a>
          <a
            onClick={() => handleMenu()}
            className="link-item"
            href="#section-contact"
          >
            Contato
          </a>
        </div>
      )}
    </S.HeaderDiv>
  );
};

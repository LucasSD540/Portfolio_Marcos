import styled from "styled-components";

export const MainDiv = styled.div`
  padding-top: 80px;
  
  .section-title {
    text-align: center;
    font-size: 32px;
    color: #fff;
    margin: 80px 0 48px 0;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 28px;
      margin: 40px 0 24px 0;
    }
  }

  .card-div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    .card-div {
      flex-direction: column;
      align-items: center;
    }
  }

  #section-services {
    margin-bottom: 80px;
  }

  #section-certificates {
    display: flex;
    flex-direction: column;
    align-items: center;

    .certificate-div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
    }
  }
    @media (max-width: 768px) {
      #section-certificates {
        .certificate-div {
          grid-template-columns: 1fr;
        }
      }
    }

  #section-interest {
    .form-div {
      display: flex;
      justify-content: space-between;

      .div-1-interest {
        display: flex;
        flex-direction: column;
        width: 45%;

        .email-input {
            margin: 32px 0;
          }

        input {
          height: 60px;
          padding: 24px;
          border-radius: 25px;
          border: none;
          outline: none;
          font-size: 16px;
        }
          input::placeholder {
            color: #ccc;
            font-size: 18px;
            font-weight: bold;
        }
      }

      .div-2-interest {
        width: 45%;

        textarea {
          width: 100%;
          height: 100%;
          resize: none;
          border-radius: 15px;
          padding: 24px;
          outline: none;
          font-size: 16px;
        }

        textarea::placeholder {
            color: #ccc;
            font-size: 18px;
            font-weight: bold;
        }
      }
    } 
      
    .main-form-div {
      display: flex;
      flex-direction: column;
    }

    .btn-div {
      text-align: center;

      button {
        margin-top: 24px;
        background-color: #1F9CF0;
        color: #fff;
        border: none;
        border-radius: 30px;
        padding: 16px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
      .form-div {
        flex-direction: column;

        .div-1-interest {
          margin-bottom: 24px;
        }

        .div-1-interest, .div-2-interest {
          width: 100%;
        }
      }

      .btn-div {
        button {
          font-size: 14px;
        }
      }
    }
  }

  #section-contact {
    margin-bottom: 80px;

    .contact-div {
      display: flex;
      color: #fff;

      .contact-div-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
      }

      .contact-div-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
      }

      .center {
        margin: 24px 0;
      }

      img {
        margin-right: 16px;
      }

      p {
        width: 160px;
      }
    }

    .contact-item {
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      margin-bottom: 32px;

      .contact-div {
        flex-direction: column;
        align-items: center;

        .contact-item {
          margin-bottom: 24px;
        }

        .center {
          margin: 0 0 24px 0;
        }
      }
    }
  }

  #section-hello {
    display: flex;
    margin-top: 80px;
    color: #fff;

    .div-1-hello {
      .title-div {
        display: flex;
        align-items: center;

        img {
          margin-right: 16px;
        }

        h2 {
          font-size: 40px;
        }
      }

      p {
        font-size: 32px;
        margin: 40px 32px 0 0;
        text-align: justify;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;

      .div-1-hello {
        .title-div {
          img {
            height: 32px;
          }

          h2 {
            font-size: 20px;
          }
        }

        p {
          font-size: 16px;
          margin: 32px 0 24px 0;
        }
      }

      .div-2-hello {
        img {
          width: 100%;
        }
      }
    }
  }

  #section-about {
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;

    .about-info {
      display: flex;
    }

    .div-1-about {
      width: 50%;
      color: #fff;

      .about-text {
        font-size: 20px;
        text-align: justify;
      }
    }

    .div-2-about {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      color: #fff;

      .div-statistics {
        display: flex;

        .statistics-item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .statistics-number {
            font-size: 32px;
            font-weight: bold;
          }

          .statistics-title {
            margin-top: 8px;
            width: 50%;
            text-align: center;
            color: #ccc;
          }
        }

      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        margin-top: 80px;
        padding: 12px;
        max-width: 50%;
        width: 100%;
        background-color: #1F9CF0;
        color: #fff;
        border: none;
        border-radius: 30px;
        cursor: pointer;

        img {
          margin-right: 8px;
        }
      }
    }

    @media (max-width: 768px) {
        .about-info {
        flex-direction: column;
      }

      .div-1-about, .div-2-about {
        width: 100%;

        .about-text {
        font-size: 16px;
      }

      .div-statistics {
        margin-top: 24px;

        .statistics-item {
          .statistics-number {
            font-size: 20px;
          }

          .statistics-title {
            font-size: 12px;
          }
        }
      }

      button {
        margin-top: 24px;
        font-size: 12px;

        img {
          height: 16px;
        }
      }
      }
  }
`;

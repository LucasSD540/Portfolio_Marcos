import styled from "styled-components";

export const MainDiv = styled.div`
  padding-top: 80px;
  
  .section-title {
    text-align: center;
    font-size: 32px;
    color: #fff;
    margin: 80px 0 48px 0;
  }

  .card-div {
    display: flex;
    justify-content: space-between;
  }

  #section-services {
    margin-bottom: 80px;
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
        }

        textarea::placeholder {
            color: #ccc;
            font-size: 18px;
            font-weight: bold;
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
  }

  #section-hello {
    display: flex;
    margin-top: 80px;
    color: #fff;

    .div-1-hello {
      .title-div {
        display: flex;

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

      p {
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

        img {
          margin-right: 8px;
        }
      }
  }
`;

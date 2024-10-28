import "./HomePage.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import backgroundImg from "../images/main_background.png";
import backgroundImgSmall from "../images/main_background_small.png";
import historyBar from "../images/history_bar.png";
import logo from "../images/logo.png";

function HomePage() {
  const [bgImage, setBgImage] = useState(backgroundImg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgImage(backgroundImgSmall);
      } else {
        setBgImage(backgroundImg);
      }
    };

    // Обработчик события
    window.addEventListener("resize", handleResize);

    // Инициализация при первом рендере
    handleResize();

    // Очистка обработчика события при размонтировании
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <div className="bg-container">
          <Image src={bgImage} className="bg-image" fluid />
          <div className="flex">
            <div className="logo">
              <Image src={logo} className="logo_img" />
            </div>
            <div className="header">
              <span className="header">
                КОЛОКШАНСКИЕ
                <br />
                АСФАЛЬТОСМЕСИТЕЛИ
              </span>
            </div>
          </div>
          <div className="p_header">
            <p className="header">
              №1 СРЕДИ РОССИЙСКИХ
              <br />
              ПРОИЗВОДИТЕЛЕЙ
              <br />
              АСФАЛЬТОСМЕСИТЕЛЕЙ
            </p>
          </div>
          <div className="flex_small">
            <div className="logo_small">
              <Image src={logo} className="logo_img" />
            </div>
            <div>
              <p className="header">№1 В РОССИИ</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <br/>
          <h1 className="about_us">Знакомство с предприятием</h1>
          <div className="about_us">
            <div className="about_us_p_div">
              <div className="about_us_inner">
                <p className="about_us">
                  История завода начинается с 1913 года, когда были построены
                  первые производственные цеха для изготовления сажи. В 1965
                  году предприятие получило статус филиала «Владимирского
                  тракторного завода», а уже позже было переименовано в
                  «Колокшанский агрегатный завод».
                </p>
              </div>
              <div className="about_us_inner">
                <p className="about_us">
                  В 1994 году на базе «КАЗ» был образован филиал Московской промышленно-коммерческой фирмы «Тельтосервис», крупнейшей компании на территории РФ, занимающейся поставкой и реализацией запасных частей, узлов и агрегатов к асфальтосмесительным установкам «Тельтомат».
                </p>
              </div>
              <div className="about_us_inner">
                <p className="about_us">
                  В короткий срок «Колокшанский агрегатный завод» освоил выпуск
                  многих узлов и агрегатов: дозаторов, транспортёров, сушильных
                  барабанов, и уже в 2002 году специалистами завода была
                  спроектирована, разработана и изготовлена первая
                  асфальтосмесительная установка «КА-160»
                </p>
              </div>
            </div>
            <div className="historybar">
              <Image src={historyBar}/>
            </div>
          </div>
      </main>
    </>
  );
}

export default HomePage;

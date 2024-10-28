import "./HomePage.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import backgroundImg from "../images/main_background.png";
import backgroundImgSmall from "../images/main_background_small.png";
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
  );
}

export default HomePage;

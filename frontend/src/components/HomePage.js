import "./HomePage.scss";
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import backgroundImg from "../images/main_background.png";
import backgroundImgSmall from "../images/main_background_small.png";
import historyBar from "../images/history_bar.png";
import logo from "../images/logo.png";
import history_1 from "../images/history_1.png";
import history_2 from "../images/history_2.png";
import history_3 from "../images/history_3.png";
import ka240 from "../images/fullsize_ka240.png";
import ka160 from "../images/fullsize_ka160.png";
import ka120 from "../images/fullsize_ka120.png";
import ugs240 from "../images/fullsize_ugs.png";
import details from "../images/fullsize_details.png";
import details_not_ka from "../images/fullsize_details_not_kaz.png";
import Aos from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const [bgImage, setBgImage] = useState(backgroundImg);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgImage(backgroundImgSmall);
        setIsHidden(true);
      } else {
        setBgImage(backgroundImg);
        setIsHidden(false);
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

  useEffect(() => {
    Aos.init();
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
        <br />
        <h1 className="about_us">Знакомство с предприятием</h1>
        <div className="about_us">
          <div className="about_us_p_div">
            <div className="about_us_inner">
              <p className="about_us p_1">
                История завода начинается с 1913 года, когда были построены
                первые производственные цеха для изготовления сажи. В 1965 году
                предприятие получило статус филиала «Владимирского тракторного
                завода», а уже позже было переименовано в «Колокшанский
                агрегатный завод».
              </p>
              <Image
                src={history_1}
                style={{ display: isHidden ? "flex" : "none" }}
                className="i_1"
                data-aos="fade-left"
              />
            </div>
            <div className="about_us_inner">
              <Image
                src={history_2}
                style={{ display: isHidden ? "flex" : "none" }}
                className="i_2"
                data-aos="fade-right"
              />
              <p className="about_us p_2">
                В 1994 году на базе «КАЗ» был образован филиал Московской
                промышленно-коммерческой фирмы «Тельтосервис», крупнейшей
                компании на территории РФ, занимающейся поставкой и реализацией
                запасных частей, узлов и агрегатов к асфальтосмесительным
                установкам «Тельтомат».
              </p>
            </div>
            <div className="about_us_inner">
              <p className="about_us p_1">
                В короткий срок «Колокшанский агрегатный завод» освоил выпуск
                многих узлов и агрегатов: дозаторов, транспортёров, сушильных
                барабанов, и уже в 2002 году специалистами завода была
                спроектирована, разработана и изготовлена первая
                асфальтосмесительная установка «КА-160»
              </p>
              <Image
                src={history_3}
                style={{ display: isHidden ? "flex" : "none" }}
                className="i_1"
                data-aos="fade-left"
              />
            </div>
          </div>
          <div className="historybar" data-aos="fade-left">
            <Image
              src={historyBar}
              className="historybar_image"
              style={{ display: isHidden ? "none" : "flex" }}
            />
          </div>
        </div>
        <div>
          <h1 className="products">Наша продукция</h1>
        </div>
        <div className="outer_product flex">
          <div className="inner_product ">
          <Image src={ka240}/>
          <span>КА-240</span>
          </div>
          <div className="inner_product ">
          <Image src={ka160}/>
          <span>КА-160</span>
          </div>
          <div className="inner_product ">
          <Image src={ka120}/>
          <span>КА-120</span>
          </div>
          <div className="inner_product ">
          <Image src={ugs240}/>
          <span>УГС-240</span>
          </div>
          <div className="inner_product ">
          <Image src={details}/>
          <span className="details">Запчасти для <br></br> заводов КАЗ</span>
          </div>
          <div className="inner_product ">
          <Image src={details_not_ka}/>
          <span className="details">Запчасти для <br></br>импортных АСУ </span>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;

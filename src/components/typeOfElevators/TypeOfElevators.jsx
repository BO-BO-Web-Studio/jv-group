import React, { useEffect, useState } from "react";
import classes from "./typeOfElevators.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-scroll";

function TypeOfElevators() {
  const myCategories = [
    { key: "cabins", name: "Кабины" },
    { key: "control system", name: "Система управления" },
    { key: "escalator", name: "Эскалатор" },
    { key: "travelator ", name: "Траволатор " },
    { key: "doors", name: "Двери" },
    { key: "buttons", name: "Кнопки" },
  ];
  const myProducts = [    {
    id: 4,
    title: "XTQ01-001",
    title2: "Ceiling:",
    img: "/assets/img/cabins4.jpg",
    text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
    category: "cabins",
  },
    {
      id: 1,
      title: "XTQ01-001",
      title2: "Ceiling:",
      img: "/assets/img/cabins1.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "cabins",
    },
    {
      id: 2,
      title: "fgfgd",
      title2: "Ceiling:",
      img: "/assets/img/cabins2.png",
      text: " Hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "cabins",
    },
    {
      id: 3,
      title: "XTQ01-001",
      title2: "Ceiling:",
      img: "/assets/img/cabins3.png",
      text: " Mc L Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "cabins",
    },

    {
      id: 5,
      title: "XTQ01-001",
      title2: "Ceiling:",
      img: "/assets/img/cabins5.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "cabins",
    },
    {
      id: 6,
      title: "XTQ01-001",
      title2: "Ceiling:",
      img: "/assets/img/cabins6.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "cabins",
    },
    {
      id: 7,
      title: "XTQ01-001",
      title2: "Ceiling:",
      img: "/assets/img/cabins7.jpg",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "cabins",
    },
    {
      id: 11,
      title: "XHBL1-A",
      title2: "Ceiling:",
      img: "/assets/img/button4.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 8,
      title: "XCP2-C",
      title2: "Ceiling:",
      img: "/assets/img/button1.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 9,
      title: "XHB8-B",
      title2: "Ceiling:",
      img: "/assets/img/button2.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 10,
      title: "XHB12-A",
      title2: "Ceiling:",
      img: "/assets/img/button3.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 12,
      title: "XCP16-A",
      title2: "Ceiling:",
      img: "/assets/img/button5.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 13,
      title: "TFT显示器",
      title2: "Ceiling:",
      img: "/assets/img/button6.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 14,
      title: "XCP12-A",
      title2: "Ceiling:",
      img: "/assets/img/button7.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 15,
      title: "XHB7-A",
      title2: "Ceiling:",
      img: "/assets/img/button8.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 16,
      title: "XHB11-C",
      title2: "Ceiling:",
      img: "/assets/img/button9.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 17,
      title: "XHB4-A",
      title2: "Ceiling:",
      img: "/assets/img/button10.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 18,
      title: "XHB23-A",
      title2: "Ceiling:",
      img: "/assets/img/button11.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "buttons",
    },
    {
      id: 19,
      title: "XTQ09-12",
      title2: "Ceiling:",
      img: "/assets/img/door1.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "doors",
    },
    {
      id: 20,
      title: "XTQ09-X1430",
      title2: "Ceiling:",
      img: "/assets/img/door2.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "doors",
    },
    {
      id: 21,
      title: "XTQ09-105",
      title2: "Ceiling:",
      img: "/assets/img/door3.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "doors",
    },
    {
      id: 22,
      title: "XTQ09-10",
      title2: "Ceiling:",
      img: "/assets/img/door4.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "doors",
    },
    {
      id: 23,
      title: "XTQ09-01",
      title2: "Ceiling:",
      img: "/assets/img/door5.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "doors",
    },
    {
      id: 24,
      title: "XTQ09-X1408",
      title2: "Ceiling:",
      img: "/assets/img/door6.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "doors",
    },
    {
      id: 25,
      title: "XTQ09-131-1",
      title2: "Ceiling:",
      img: "/assets/img/door7.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "doors",
    },
    {
      id: 26,
      title: "XTQ09-13",
      title2: "Ceiling:",
      img: "/assets/img/door8.png",
      text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo",
      category: "doors",
    },
  ];
  const [active, setActive] = useState("cabins");
  const [activeSlide, setActiveSlide] = useState(myProducts[0]);
  const [products, setProducts] = useState([myProducts]);
  const [activeImage, setActiveImage] = useState(myProducts[0].img);

  function handleClick(categories) {
    const tovars = setProducts(
      myProducts.filter((product) => product.category == categories)
    );
    return tovars;
  }

  useEffect(() => {
    handleClick(active);
    // setActiveSlide(products[0][0])
  }, [active]);

  const handleClickImage = (product) => () => {
    setActiveImage(product.img);
    setActiveSlide(product);
  };

  return (
    <div id="elevators" className={classes.typeOfElevators}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <h4 className={classes.h4}>Каталог лифтов</h4>
          <div className={classes.text}>
            {myCategories.map((category) => (
              <p
                onClick={() => {
                  // handleClick(category.key);
                  setActive(category.key);
                }}
                className={
                  active == category.key ? classes.active : classes.paragraph
                }
                key={category.key}
              >
                {category.name}
              </p>
            ))}
          </div>
        </header>
        <h2 className={classes.h2}>{activeSlide.title}</h2>
        <div className={classes.main}>
          <div className={classes.info}>
            <div className={classes.block}>
              <div>
                <div className={classes.title}>
                  {activeSlide.title2 && (
                    <h5 className={classes.h5}>{activeSlide.title2}</h5>
                  )}
                  {activeSlide.text && (
                    <p className={classes.paragraph2}>{activeSlide.text}</p>
                  )}
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination, Navigation]}
              breakpoints={{
                592: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className={classes.mySwiper}
            >
              {products.map((product) => (
                <SwiperSlide onClick={handleClickImage(product)}>
                  <img className={classes.slideImg} src={product.img} />
                  <p className={classes.slideP}>{product.title}</p>
                </SwiperSlide>
              ))}

              <button className={classes.btn}>
                Скачать каталог
                <img
                  className={classes.downloadWhite}
                  src="/assets/img/logo/download.svg"
                  alt=""
                />
                <img
                  className={classes.downloadBlue}
                  src="/assets/img/logo/download-blue.svg"
                  alt=""
                />
              </button>
            </Swiper>
          </div>
          <div className={classes.formLift}>
            <div className={classes.blockMobail}>
              <div className={classes.title}>
                {activeSlide.title2 && (
                  <h5 className={classes.h5}>{activeSlide.title2}</h5>
                )}
                {activeSlide.text && (
                  <p className={classes.paragraph2}>{activeSlide.text}</p>
                )}
              </div>
              <button className={classes.buttonMobail}>Оставить заявку</button>
            </div>
            <div className={classes.elevators}>
              <img className={classes.imgLift} src={activeImage} alt="" />
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                to="contacts"
                rel="stylesheet"
                href=""
              >
                <button className={classes.button}>Оставить заявку</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeOfElevators;

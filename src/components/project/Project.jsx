import React, { useState } from "react";
import classes from "./project.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

function Project() {
  const projects = [
    {
      id: 1,
      name: "Бустон Сити",
      img: "/assets/img/project1.jpg",
      text: "Компания открылась 2018 году. Занимаемся продажей и Установкойлифтов и эскалаторов. Имеет свой Сервис центр который обслуживаетвсех видов лифтов. Наши сотрудники Квалифицированные инженеры. Работаем со всеми мировыми брендами. Продали около 200 лифтов. Официальные представители компании Save Elevator (XIZI) и Larson в средней азии. Агенты компании Schindler в Таджикистане.",
    },
    {
      id: 2,
      name: "Хоризон",
      img: "/assets/img/project2.jpg",
      text: "Компания открылась 2018 году. Занимаемся продажей и Установкойлифтов и эскалаторов. Имеет свой Сервис центр который обслуживаетвсех видов лифтов. Наши сотрудники Квалифицированные инженеры. Работаем со всеми мировыми брендами. Продали около 200 лифтов. Официальные представители компании Save Elevator (XIZI) и Larson в средней азии. Агенты компании Schindler в Таджикистане.",
    },
    {
      id: 3,
      name: "Название проекта",
      img: "/assets/img/project3.jpg",
      text: "Компания открылась 2018 году. Занимаемся продажей и Установкойлифтов и эскалаторов. Имеет свой Сервис центр который обслуживаетвсех видов лифтов. Наши сотрудники Квалифицированные инженеры. Работаем со всеми мировыми брендами. Продали около 200 лифтов. Официальные представители компании Save Elevator (XIZI) и Larson в средней азии. Агенты компании Schindler в Таджикистане.",
    },
    {
      id: 4,
      name: "Название проекта",
      img: "/assets/img/project4.jpg",
      text: "Компания открылась 2018 году. Занимаемся продажей и Установкойлифтов и эскалаторов. Имеет свой Сервис центр который обслуживаетвсех видов лифтов. Наши сотрудники Квалифицированные инженеры. Работаем со всеми мировыми брендами. Продали около 200 лифтов. Официальные представители компании Save Elevator (XIZI) и Larson в средней азии. Агенты компании Schindler в Таджикистане.",
    },
    {
      id: 5,
      name: "Название проекта",
      img: "/assets/img/project5.jpg",
      text: "Компания открылась 2018 году. Занимаемся продажей и Установкойлифтов и эскалаторов. Имеет свой Сервис центр который обслуживаетвсех видов лифтов. Наши сотрудники Квалифицированные инженеры. Работаем со всеми мировыми брендами. Продали около 200 лифтов. Официальные представители компании Save Elevator (XIZI) и Larson в средней азии. Агенты компании Schindler в Таджикистане.",
    },
    { id: 6, name: "Название проекта", img: "/assets/img/project6.jpg" },
    {
      id: 7,
      name: "Название проекта",
      img: "/assets/img/project7.jpg",
      text: "Компания открылась 2018 году. Занимаемся продажей и Установкойлифтов и эскалаторов. Имеет свой Сервис центр который обслуживаетвсех видов лифтов. Наши сотрудники Квалифицированные инженеры. Работаем со всеми мировыми брендами. Продали около 200 лифтов. Официальные представители компании Save Elevator (XIZI) и Larson в средней азии. Агенты компании Schindler в Таджикистане.",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(projects[0]);

  const handleClickImage = (project) => () => {
    setActiveSlide(project);
  };
  return (
    <div id="projects" className={classes.project}>
      <div className={classes.wrapper}>
        <h5 className={classes.h5}>Наши проекты</h5>
        <div className={classes.near}>
          <div className={classes.text}>
            {activeSlide.name && (
              <h1 className={classes.h1}>{activeSlide.name} </h1>
            )}

            {activeSlide.text && (
              <p className={classes.paragraph}>{activeSlide.text}</p>
            )}
          </div>
          <div className={classes.swiper}>
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
                  slidesPerView: 2.5,
                  spaceBetween: 24,
                },
                1200: {
                  slidesPerView: "auto",
                  spaceBetween: 24,
                },
              }}
              className={classes.mySwiper}
            >
              {projects.map((project) => (
                <SwiperSlide onClick={handleClickImage(project)}>
                  <div>
                    <img className={classes.width} src={project.img} alt="" />
                    <p className={classes.slideP}>{project.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

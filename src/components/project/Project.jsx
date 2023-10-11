import React from "react";
import classes from "./project.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

function Project() {
  return (
    <div id="projects" className={classes.project}>
      <div className={classes.wrapper}>
        <h5 className={classes.h5}>Наши проекты</h5>
        <div className={classes.near}>
          <div className={classes.text}>
            <h1 className={classes.h1}>
              Название выбранного актуального проекта
            </h1>
            <p className={classes.paragraph}>
              Компания открылась 2018 году. Занимаемся продажей и Установкой
              лифтов и эскалаторов. Имеет свой Сервис центр который обслуживает
              всех видов лифтов. Наши сотрудники Квалифицированные инженеры.
              Работаем со всеми мировыми брендами. Продали около 200 лифтов.
              Официальные представители компании Save Elevator (XIZI) и Larson в
              средней азии. Агенты компании Schindler в Таджикистане.
            </p>
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
              <SwiperSlide>
                <div>
                  <img
                    className={classes.width}
                    src="/assets/img/project-lift1.jpg"
                    alt=""
                  />
                  <p className={classes.slideP}>Название проекта</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className={classes.width}
                  src="/assets/img/project-lift2.jpg"
                  alt=""
                />
                <p className={classes.slideP}>Название проекта</p>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className={classes.width}
                  src="/assets/img/project-lift3.jpg"
                  alt=""
                />
                <p className={classes.slideP}>Название проекта</p>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className={classes.width}
                  src="/assets/img/project-lift2.jpg"
                  alt=""
                />
                <p className={classes.slideP}>Название проекта</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

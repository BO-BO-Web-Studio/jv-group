import React from "react";
import classes from "./reviews.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

function Reviews() {
  return (
    <div id="reviews" className={classes.reviews}>
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>Отзывы наших клиентов</h1>
        <div className={classes.swiper}>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
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
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className={classes.mySwiper}
          >
            <SwiperSlide>
              <div className={classes.card}>
                <img
                  className={classes.img}
                  src="/assets/img/user1.png"
                  alt=""
                />
                <h2 className={classes.title}>Мурадова Сабрина</h2>
                <p className={classes.paragraph1}>ведущая</p>
                <p className={classes.paragraph2}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  officia deserunt
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              
              <div className={classes.card}>
                <img
                  className={classes.img}
                  src="/assets/img/user1.png"
                  alt=""
                />
                <h2 className={classes.title}>Мурадова Сабрина</h2>
                <p className={classes.paragraph1}>ведущая</p>
                <p className={classes.paragraph2}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  officia deserunt
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              
              <div className={classes.card}>
                <img
                  className={classes.img}
                  src="/assets/img/user1.png"
                  alt=""
                />
                <h2 className={classes.title}>Мурадова Сабрина</h2>
                <p className={classes.paragraph1}>ведущая</p>
                <p className={classes.paragraph2}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  officia deserunt
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              
              <div className={classes.card}>
                <img
                  className={classes.img}
                  src="/assets/img/user1.png"
                  alt=""
                />
                <h2 className={classes.title}>Мурадова Сабрина</h2>
                <p className={classes.paragraph1}>ведущая</p>
                <p className={classes.paragraph2}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  officia deserunt
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              
              <div className={classes.card}>
                <img
                  className={classes.img}
                  src="/assets/img/user1.png"
                  alt=""
                />
                <h2 className={classes.title}>Мурадова Сабрина</h2>
                <p className={classes.paragraph1}>ведущая</p>
                <p className={classes.paragraph2}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  officia deserunt
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

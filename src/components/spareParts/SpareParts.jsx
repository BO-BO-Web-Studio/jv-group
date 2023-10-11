import React from "react";
import classes from "./spareParts.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

function SpareParts() {
  return (
    <div id="spareParts" className={classes.spareParts}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h1 className={classes.h1}>Каталог запчастей</h1>
          <button className={classes.btn}>
            Скачать каталог <img src="/assets/img/logo/download.svg" alt="" />
          </button>
        </div>
        <div className={classes.swiper}>
          <Swiper
            slidesPerView={2}
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
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className={classes.mySwiper}
          >
            <SwiperSlide>
              <img
                className={classes.img}
                src="/assets/img/spare-parts1.png"
                alt=""
              />
              <div className={classes.paragraphs}>
                <p className={classes.paragraph1}>XTQ01-001</p>
                <p className={classes.paragraph2}>Стандарт</p>
                <p className={classes.paragraph3}>
                  Подробнее
                  <img src="/assets/img/logo/frame.svg" alt="" />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={classes.img}
                src="/assets/img/spare-parts2.png"
                alt=""
              />{" "}
              <div className={classes.paragraphs}>
                <p className={classes.paragraph1}>XTQ01-001</p>
                <p className={classes.paragraph2}>Стандарт</p>
                <p className={classes.paragraph3}>
                  Подробнее
                  <img src="/assets/img/logo/frame.svg" alt="" />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={classes.img}
                src="/assets/img/spare-parts3.png"
                alt=""
              />{" "}
              <div className={classes.paragraphs}>
                <p className={classes.paragraph1}>XTQ01-001</p>
                <p className={classes.paragraph2}>Стандарт</p>
                <p className={classes.paragraph3}>
                  Подробнее
                  <img src="/assets/img/logo/frame.svg" alt="" />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={classes.img}
                src="/assets/img/spare-parts4.png"
                alt=""
              />{" "}
              <div className={classes.paragraphs}>
                <p className={classes.paragraph1}>XTQ01-001</p>
                <p className={classes.paragraph2}>Стандарт</p>
                <p className={classes.paragraph3}>
                  Подробнее
                  <img src="/assets/img/logo/frame.svg" alt="" />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={classes.img}
                src="/assets/img/spare-parts1.png"
                alt=""
              />
              <div className={classes.paragraphs}>
                <p className={classes.paragraph1}>XTQ01-001</p>
                <p className={classes.paragraph2}>Стандарт</p>
                <p className={classes.paragraph3}>
                  Подробнее
                  <img src="/assets/img/logo/frame.svg" alt="" />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={classes.img}
                src="/assets/img/spare-parts2.png"
                alt=""
              />{" "}
              <div className={classes.paragraphs}>
                <p className={classes.paragraph1}>XTQ01-001</p>
                <p className={classes.paragraph2}>Стандарт</p>
                <p className={classes.paragraph3}>
                  Подробнее
                  <img src="/assets/img/logo/frame.svg" alt="" />
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SpareParts;

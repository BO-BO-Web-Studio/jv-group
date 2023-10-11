import React from "react";
import classes from "./partners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

function Partners() {
  return (
    <div id="partners" className={classes.partners}>
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>Наши партнёры</h1>
        <div className={classes.swiper}>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            centeredSlides={true}
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
              <div className={classes.slide}>
                <img className={classes.img} src="/assets/img/agt.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.slide}>
                <img className={classes.img} src="/assets/img/agt.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.slide}>
                <img className={classes.img} src="/assets/img/agt.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.slide}>
                <img className={classes.img} src="/assets/img/agt.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.slide}>
                <img className={classes.img} src="/assets/img/agt.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.slide}>
                <img className={classes.img} src="/assets/img/agt.png" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Partners;

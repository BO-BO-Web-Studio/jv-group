import React from "react";
import classes from "./youTube.module.scss";

function YouTube() {
  return (
    <div className={classes.youTube}>
      <div className={classes.wrapper}>
        <h5 className={classes.h5}>Наш YouTube канал</h5>
        <h1 className={classes.h1}>Название выбранного видео</h1>
        <div className={classes.flex}>
          <div className={classes.video}>
            <img className={classes.videoImg} src="/assets/img/youtube.png" alt="" />
          </div>
          <div className={classes.choice}>
            <div className={classes.text}>
              <div className={classes.paragraphs}>
                <p className={classes.paragraph}>01</p>
                <p className={classes.paragraph}> Название данного видео </p>
              </div>
              <img className={classes.img} src="/assets/img/logo/arrowWhite.svg" alt="" />
            </div>
            <div className={classes.text}>
              <div className={classes.paragraphs}>
                <p className={classes.paragraph}>01</p>
                <p className={classes.paragraph}> Название данного видео </p>
              </div>
              <img className={classes.img} src="/assets/img/logo/arrowWhite.svg" alt="" />
            </div>
            <div className={classes.text}>
              <div className={classes.paragraphs}>
                <p className={classes.paragraph}>01</p>
                <p className={classes.paragraph}> Название данного видео </p>
              </div>
              <img className={classes.img} src="/assets/img/logo/arrowWhite.svg" alt="" />
            </div>
            <div className={classes.text}>
              <div className={classes.paragraphs}>
                <p className={classes.paragraph}>01</p>
                <p className={classes.paragraph}> Название данного видео </p>
              </div>
              <img className={classes.img} src="/assets/img/logo/arrowWhite.svg" alt="" />
            </div>
            <button className={classes.btn}>
            Открыть все <img src="/assets/img/logo/frame.svg" alt="" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTube;

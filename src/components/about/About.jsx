import React from "react";
import classes from "./about.module.scss";

function About() {
  return (
    <div id="about" className={classes.about}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <div>
            <h1 className={classes.title}>О компании</h1>
          </div>
          <div className={classes.paragraph}>
            Компания открылась 2018 году. Занимаемся продажей и Установкой
            лифтов и эскалаторов. Имеет свой Сервис центр который обслуживает
            всех видов лифтов. Наши сотрудники Квалифицированные инженеры.
            Работаем со всеми мировыми брендами. Продали около 200 лифтов.
            Официальные представители компании Save Elevator (XIZI) и Larson в
            средней азии. Агенты компании Schindler в Таджикистане. Имеем свой
            офис в Таджикистане, Узбекистане, Азербайджане и в Польше.
          </div>
        </div>
        <div className={classes.grid}>
          <div>
            <div className={classes.image}>
              <img
                className={classes.img}
                src="/assets/img/logo/reputation.svg"
                alt=""
              />
            </div>
            <p className={classes.paragraphAbout}>
              По репутации среди конкурентов
            </p>
          </div>
          <div>
            <div className={classes.image}>
              <img
                className={classes.img}
                src="/assets/img/logo/price.svg"
                alt=""
              />
            </div>
            <p className={classes.paragraphAbout}>
              По соотношению
              <br /> цены/качества
            </p>
          </div>
          <div>
            <div className={classes.image}>
              <img
                className={classes.img}
                src="/assets/img/logo/service.svg"
                alt=""
              />
            </div>
            <p className={classes.paragraphAbout}>
              Год бесплатного обслуживания
            </p>
          </div>
          <div className={classes.bg1}>
            <div className={classes.image}>
              <img
                className={classes.img}
                src="/assets/img/logo/consumer.svg"
                alt=""
              />
            </div>
            <p className={classes.paragraphAbout}>Ориентация на потребителя</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

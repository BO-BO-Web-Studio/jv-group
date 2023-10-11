import React from "react";
import classes from "./footer.module.scss";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.near}>
          <div className={classes.logo}>
            <img
              className={classes.logoImg}
              src="/assets/img/logo/logo.svg"
              alt=""
            />
            <p className={classes.paragraph}>
              Агенты компании Schindler в Таджикистане. Имеем свой офис в
              Таджикистане, Узбекистане, Азербайджане и в Польше.
            </p>
          </div>
          <div className={classes.grid}>
            <div>
              <h5 className={classes.h5}>О компании</h5>
              <div className={classes.info}>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="about"
                  className={classes.paragraph1}
                >
                  Наши преимущества
                </Link>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="projects"
                  className={classes.paragraph1}
                >
                  Наши проекты
                </Link>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="partners"
                  className={classes.paragraph1}
                >
                  Наши партнёры
                </Link>
              </div>
            </div>
            <div>
              <h5 className={classes.h5}>Каталог</h5>
              <div className={classes.info}>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="elevators"
                  className={classes.paragraph1}
                >
                  Каталог лифтов
                </Link>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="spareParts"
                  className={classes.paragraph1}
                >
                  Запчасти для лифтов
                </Link>
              </div>
            </div>
            <div>
              <h5 className={classes.h5}>Контакты</h5>
              <div className={classes.info}>
                <p className={classes.paragraph1}>+992 999 99 99 99</p>
                <p className={classes.paragraph1}>jvgroup@gmail.com</p>
                <p className={classes.paragraph1}>Список филиалов</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flex}>
          <p className={classes.copirightg}>©Все права защищены</p>
          <a className={classes.a} href="https://bobo.tj/" target="_blank">
            <p className={classes.created}>
              Created by<span className={classes.red}>BO</span>/BO
            </p>
          </a>
          <div className={classes.img}>
            <img
              className={classes.img1}
              src="/assets/img/logo/facebook.svg"
              alt=""
            />
            <img
              className={classes.img2}
              src="/assets/img/logo/instagram.svg"
              alt=""
            />
            <img
              className={classes.img3}
              src="/assets/img/logo/twitter.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

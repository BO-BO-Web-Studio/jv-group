import React from "react";
import classes from "./header.module.scss";
import { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [open, setOpen] = useState(false);
  const [burger, setBurger] = useState(false);
  const [active, setActive] = useState("");

  function onActive(id) {
    setOpen(true);
    setActive(id);
  }
  function onClose() {
    setOpen(false);
  }

  return (
    <div className={classes.header}>
      <div className={classes.wrapperMobail}>
        <div className={classes.wrapper}>
          <div
            onClick={() => {
              setBurger(!burger);
            }}
            className={classes.burger}
          >
            <img
              className={classes.burger}
              src="/assets/img/logo/burger.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className={classes.logo}
              src="/assets/img/logo/logo.svg"
              alt=""
            />
          </div>
          <div className={classes.text}>
            <div className={classes.about}>
              <p
                onClick={() => {
                  onActive(active == 1 ? null : 1);
                }}
              >
                О компании
                <img
                  className={
                    open == true && active == "1" ? classes.close : classes.down
                  }
                  src="/assets/img/logo/chevron-down.svg"
                  alt=""
                />
                <img
                  className={
                    open == true && active == "1" ? classes.down : classes.close
                  }
                  src="/assets/img/logo/chevron-up.png"
                  alt=""
                />
              </p>
              <div
                className={
                  open == true && active == "1" ? classes.open : classes.close
                }
              >
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="about"
                >
                  Наши премущества
                </Link>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="projects"
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
                >
                  Наши партнёры
                </Link>
              </div>
            </div>
            <div className={classes.about}>
              <p
                onClick={() => {
                  onActive(active == 2 ? null : 2);
                }}
              >
                Каталог
                <img
                  className={
                    open == true && active == "2" ? classes.close : classes.down
                  }
                  src="/assets/img/logo/chevron-down.svg"
                  alt=""
                />
                <img
                  className={
                    open == true && active == "2" ? classes.down : classes.close
                  }
                  src="/assets/img/logo/chevron-up.png"
                  alt=""
                />
              </p>
              <div
                className={
                  open == true && active == "2" ? classes.open : classes.close
                }
              >
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="elevators"
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
                >
                  Запчасти для лифтов
                </Link>
              </div>
            </div>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="reviews"
            >
              Отзывы
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="contacts"
            >
              Контакты
            </Link>
          </div>
          <div className={classes.button}>
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
              <button className={classes.btn}>Связаться c нами</button>
            </Link>
          </div>
        </div>
        {burger && (
          <div className={open == true ? classes.textMobail : ""}>
            <div className={classes.about}>
              <p>
                О компании
                <img
                  className={
                    open == true && active == "1" ? classes.close : classes.down
                  }
                  src="/assets/img/logo/chevron-down.svg"
                  alt=""
                />
                <img
                  className={
                    open == true && active == "1" ? classes.down : classes.close
                  }
                  src="/assets/img/logo/chevron-up.png"
                  alt=""
                />
              </p>
              <div className={classes.open}>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="about"
                >
                  Наши премущества
                </Link>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="projects"
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
                >
                  Наши партнёры
                </Link>
              </div>
            </div>
            <div className={classes.about}>
              <div className={classes.catalog}>
                <p>Каталог</p>
                <img
                  className={
                    open == true && active == "2" ? classes.close : classes.down
                  }
                  src="/assets/img/logo/chevron-down.svg"
                  alt=""
                />
                <img
                  className={
                    open == true && active == "2" ? classes.down : classes.close
                  }
                  src="/assets/img/logo/chevron-up.png"
                  alt=""
                />
              </div>
              <div className={classes.open}>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="elevators"
                >
                  Лифты
                </Link>
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  to="spareParts"
                >
                  Запчасти для лифтов
                </Link>
              </div>
            </div>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="reviews"
              className={classes.about}
            >
              Отзывы
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              to="contacts"
              className={classes.about}
            >
              Контакты
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

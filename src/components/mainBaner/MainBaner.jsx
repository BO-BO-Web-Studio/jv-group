import React from "react";
import classes from "./mainBaner.module.scss";
import { Link } from "react-scroll";

function MainBaner() {
  return (
    <div className={classes.mainBaner}>
      <div className={classes.wrapper}>
        <div className={classes.width}>
          <h1 className={classes.title}>Лифты для любого объекта</h1>
          <p className={classes.text}>
            Мы предлагаем широкий выбор лифтов для любых объектов и
            потребностей. Наши лифты отличаются высоким качеством и надежностью,
            и мы гарантируем, что вы останетесь довольны своим выбором.
          </p>
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
            <button className={classes.btn}>Оставить заявку</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainBaner;

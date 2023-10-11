import React from "react";
import classes from "./consultation.module.scss";
import { Link } from "react-scroll";

function Consultation() {
  return (
    <div className={classes.consultation}>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <h1 className={classes.h1}>
            Беспл<span className={classes.border}>атная консуль</span>тация
          </h1>
          <p className={classes.paragraph}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur ma. Nemo enim ipsam voluptatem quia
            voluptas sit
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

export default Consultation;

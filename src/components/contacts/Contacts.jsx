import React from "react";
import classes from "./contacts.module.scss";

function Contacts() {
  return (
    <div id="contacts" className={classes.contacts}>
      <div className={classes.wrapper}>
        <div className={classes.applications}>
          <div className={classes.connection}>
            <h1 className={classes.h1}>
              <span className={classes.border}>Свяжите</span>сь с нами
            </h1>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet.
            </p>
            <div className={classes.connect}>
              <div className={classes.address}>
                <div className={classes.img}>
                  <img
                    className={classes.icons}
                    src="/assets/img/logo/address.svg"
                    alt=""
                  />
                </div>
                <div>
                  <p className={classes.paragraph1}>Адрес</p>
                  <p className={classes.paragraph2}>
                    6391 Elgin St. Celina, Delaware 10299
                  </p>
                </div>
              </div>
              <div className={classes.near}>
                <div className={classes.address}>
                  <div className={classes.img}>
                    <img
                      className={classes.icons}
                      src="/assets/img/logo/phone.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className={classes.paragraph1}>Телефон</p>
                    <p className={classes.paragraph2}>+992 999 99 99 99</p>
                  </div>
                </div>
                <div className={classes.address}>
                  <div className={classes.img}>
                    <img
                      className={classes.email}
                      src="/assets/img/logo/email.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className={classes.paragraph1}>Электронная почта</p>
                    <p className={classes.paragraph2}>jvgroup@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.application}>
            <h2 className={classes.h2}>
              Заполните форму заявки и наш менеджер
              свяжется с вами:
            </h2>
            <div>
              <input className={classes.name} placeholder="ФИО*" type="text" />
            </div>
            <div className={classes.phoneIbtn}>
              <input
                className={classes.phone}
                placeholder="Телефон*"
                type="text"
              />
              <button className={classes.btn}>Оставить заявку</button>
            </div>
          </div>
        </div>
        <div className={classes.map}>
          <div>
            <iframe
              className={classes.iframe}
              src="https://yandex.ru/map-widget/v1/?ll=68.793371%2C38.580770&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxOTQyNjE1MTgxEkrQotC-0rfQuNC60LjRgdGC0L7QvSwg0JTRg9GI0LDQvdCx0LUsINC606_Rh9Cw0Lgg0KTQvtGC0LXSsyDQndC40ZHQt9OjLCA1MSIKDTSWiUIVtVIaQg%2C%2C&z=16.31"
            ></iframe>
          </div>
          <div className={classes.list}>
            <h3 className={classes.h3}>Список филиалов</h3>
            <div className={classes.branches}>
              <div className={classes.branch}>
                <div className={classes.image}>
                  <img
                    className={classes.icon}
                    src="/assets/img/logo/dushanbe.svg"
                    alt=""
                  />
                </div>
                <div className={classes.phoneText}>
                  <p className={classes.paragraph3}>
                    JV group Regus N.Muhammad 5/5
                  </p>
                  <div className={classes.number}>
                    <img
                      className={classes.iconPhone}
                      src="/assets/img/logo/phone-blue.svg"
                      alt=""
                    />
                    <p className={classes.paragraph4}>+992 44 600 07 76</p>
                  </div>
                </div>
              </div>
              <div className={classes.branch}>
                <div className={classes.image}>
                  <img
                    className={classes.icon}
                    src="/assets/img/logo/uzbekistan.svg"
                    alt=""
                  />
                </div>
                <div className={classes.phoneText}>
                  <p className={classes.paragraph3}>
                    46 А. Kokhkhar st. Yakkasaray dist. Tashkent, Uzbekistan
                  </p>
                  <div className={classes.number}>
                    <img
                      className={classes.iconPhone}
                      src="/assets/img/logo/email-blue.svg"
                      alt=""
                    />
                    <p className={classes.paragraph4}>info@torch.uz</p>
                  </div>
                </div>
              </div>
              <div className={classes.branch}>
                <div className={classes.image}>
                  <img
                    className={classes.icon}
                    src="/assets/img/logo/azer.svg"
                    alt=""
                  />
                </div>
                <div className={classes.phoneText}>
                  <p className={classes.paragraph3}>
                    Sport Plaza, H.Aliyev 115, Baku, Azerbaijan
                  </p>
                  <div className={classes.flex}>
                    <div className={classes.number}>
                      <img
                        className={classes.iconPhone}
                        src="/assets/img/logo/email-blue.svg"
                        alt=""
                      />
                      <p className={classes.paragraph4}>info@torch.az</p>
                    </div>
                    <div className={classes.number}>
                      <img
                        className={classes.iconPhone}
                        src="/assets/img/logo/phone-blue.svg"
                        alt=""
                      />
                      <p className={classes.paragraph4}>+994 51 240 49 88</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.branch}>
                <div className={classes.image}>
                  <img
                    className={classes.icon}
                    src="/assets/img/logo/poland.svg"
                    alt=""
                  />
                </div>
                <div className={classes.phoneText}>
                  <p className={classes.paragraph3}>
                    ul. Bukowinska 22. lok. 53 02-703 Warszawa, Poland
                  </p>
                  <div className={classes.number}>
                    <img
                      className={classes.iconPhone}
                      src="/assets/img/logo/email-blue.svg"
                      alt=""
                    />
                    <p className={classes.paragraph4}>info@torch.az</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

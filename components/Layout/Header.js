import React, { useEffect } from "react";
import Style from "../../styles/header.module.scss";

export default function Header() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header_EL = document.querySelector(`.${Style.header}`);
      const body_EL = document.querySelector(`body`);
      if (
        body_EL.getBoundingClientRect().y +
          header_EL.getBoundingClientRect().height <
        0
      ) {
        header_EL.classList.add(Style.header__fixedHeader);
      } else {
        header_EL.classList.remove(Style.header__fixedHeader);
      }
    });
  }, []);
  return (
    <header>
      {/* Header */}
      <div className={Style.header}>
        <div className={Style.header__container}>
          <div className={Style.header__container_wrapper}>
            {/* Logo  */}
            <div className={Style.header__logo}>
              <div className={Style.header__logo_wrapper}>
                <h1>Sun Tropical Village</h1>
                <span>Phú Quốc</span>
              </div>
            </div>

            {/* Menu  */}
            <div className={Style.header__menu}>
              <ul className={Style.header__menu_wrapper}>
                <li className={Style.header__menu_item}>Tiện ích</li>
                <li className={Style.header__menu_item}>Phối cảnh</li>
                <li className={Style.header__menu_item}>Phòng Kinh Doanh</li>
                <li className={Style.header__menu_item}>Nhà hàng</li>
                <li className={Style.header__menu_item}>Thiết kế</li>
              </ul>
            </div>

            {/* Hotline  */}
            <div className={Style.header__hotline}>
              <div className={Style.header__hotline_wrapper}>
                <a
                  href="tel:0903775828"
                  className={Style.header__hotline_button}
                >
                  Hot line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

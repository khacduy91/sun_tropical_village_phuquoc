import React from "react";
import Style from "../../styles/HomePage_style/slider.module.scss";

export default function Slider() {
  return (
    <article className={Style.slider}>
      <div className={Style.slider__container}>
        <div className={Style.slider__container_wraper}>
          <div className={Style.slider__image}>
            <div className={Style.slider__image_wrapper}>
              <img src="/Image/website-offerpage-summer.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

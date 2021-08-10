import React from "react";

import Style from "../../styles/utilities.module.scss";

export default function UtilitiesItem({ imgUrl, utility }) {
  return (
    <>
      {/* Item  */}
      <div className={Style.utilities__item}>
        <div className={Style.utilities__item_wrapper}>
          {/* Image  */}
          <div className={Style.utilities__image}>
            <div className={Style.utilities__image_wrapper}>
              <img src={imgUrl} alt={utility} />
            </div>
          </div>

          {/* Title  */}
          <div className={Style.utilities__title}>
            <div className={Style.utilities__title_wrapper}>
              <h4>{utility}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

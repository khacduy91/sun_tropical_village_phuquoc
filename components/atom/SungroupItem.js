import React from "react";
import Style from "../../styles/HomePage_style/sungroup.module.scss";

export default function SungroupItem({ heading, p }) {
  return (
    <div className={Style.sungroup__item}>
      <div className={Style.sungroup__item_wrapper}>
        <i className="ri-double-quotes-l"></i>
        <p>{p}</p>
        <h5>{heading}</h5>
      </div>
    </div>
  );
}

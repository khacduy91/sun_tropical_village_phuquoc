import React, { useEffect } from "react";
import UtilitiesItem from "../atom/UtilitiesItem";
import Style from "../../styles/utilities.module.scss";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Utilities() {
  useEffect(() => {
    gsap.from(`.${Style.utilities__item}`, {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: { opacity: 0, ease: Power3.easeOut, delay: 5 },
      scrollTrigger: {
        trigger: `.${Style.utilities}`,
        markers: false,
        start: "top 75%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, []);
  return (
    <article className={Style.utilities}>
      <div className={Style.utilities__container}>
        <div className={Style.utilities__container_wrapper}>
          {/* Heading  */}
          <div className={Style.utilities__heading}>
            <div className={Style.utilities__heading_wrapper}>
              <h3>Tiện Ích</h3>
            </div>
          </div>

          {/* Utilities  */}
          <div className={Style.utilities__utilities}>
            <div className={Style.utilities__utilities_wrapper}>
              <UtilitiesItem
                imgUrl="/Image/phu-quoc-beach_603406256.jpg"
                utility="Khem Beach"
              />
              <UtilitiesItem
                imgUrl="/Image/Wellnesssecondhomephuquoc-suntropical.jpg"
                utility="Tropical Park"
              />
              <UtilitiesItem
                imgUrl="/Image/Golf_Club_KhemBeach_Sun_Group.jpeg"
                utility="Golf Club"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

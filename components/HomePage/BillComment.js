import React, { useEffect } from "react";
import Style from "../../styles/HomePage_style/billComment.module.scss";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function BillComment() {
  useEffect(() => {
    gsap.from(`.${Style.billComment__content}`, {
      duration: 1,
      x: "0",
      opacity: 0,
      ease: { opacity: 1, ease: Power3.easeOut, delay: 1 },
      scrollTrigger: {
        trigger: `.${Style.billComment}`,
        markers: false,
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  });
  return (
    <article className={Style.billComment}>
      {/* BillComment  */}
      <div className={Style.billComment__container}>
        <div className={Style.billComment__container_wrapper}>
          {/* Image  */}
          <div className={Style.billComment__image}>
            <div className={Style.billComment__image_wrapper}>
              <img src="/Image/ms-nghi-nam-nghi-resort.jpg" alt="" />
            </div>
          </div>

          {/* Content  */}
          <div className={Style.billComment__content}>
            <div className={Style.billComment__content_wrapper}>
              {/* Commnet  */}
              <div className={Style.billComment__comment}>
                <div className={Style.billComment__comment_wrapper}>
                  <h4>MR. AND MS. NGHI</h4>
                  <p>
                    True hospitality comes not only from thoughtful, attentive
                    service but genuine human connection. From the moment you
                    book a stay at Nam Nghi, the affable Mr. and Ms. Nghi are
                    your dedicated hosts, focused solely on making your island
                    experience as adventurous, relaxing, or insightful as you
                    desire.
                  </p>
                </div>
              </div>

              {/* Cta  */}
              <div className={Style.billComment__cta}>
                <div className={Style.billComment__cta_wrapper}>
                  <button>discover more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

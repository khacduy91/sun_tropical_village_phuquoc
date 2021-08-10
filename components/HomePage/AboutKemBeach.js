import React, { useEffect } from "react";
import Style from "../../styles/aboutKemBeach.module.scss";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutKemBeach() {
  useEffect(() => {
    gsap.from(`.${Style.aboutKemBeach__heading}`, {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: { opacity: 0, ease: Power3.easeOut, delay: 5 },
      scrollTrigger: {
        trigger: `.${Style.aboutKemBeach}`,
        markers: false,
        start: "top 90%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    gsap.from(`.${Style.aboutKemBeach__image}`, {
      duration: 1,
      x: "500",
      opacity: 0,
      ease: { opacity: 0, ease: Power3.easeOut, delay: 5 },
      scrollTrigger: {
        trigger: `.${Style.aboutKemBeach}`,
        markers: false,
        start: "top 70%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });

    gsap.from(
      `.${Style.aboutKemBeach__description}, ${Style.aboutKemBeach__cta}`,
      {
        duration: 2,
        x: "0",
        opacity: 0,
        ease: { opacity: 0, ease: Power3.easeOut, delay: 2 },
        scrollTrigger: {
          trigger: `.${Style.aboutKemBeach}`,
          markers: false,
          start: "top 60%",
          end: "bottom 70%",
          toggleActions: "play none none none",
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      }
    );
  }, []);
  return (
    <article className={Style.aboutKemBeach}>
      {/* About Kem Beach  */}
      <div className={Style.aboutKemBeach__container}>
        <div className={Style.aboutKemBeach__container_wrapper}>
          {/* Heading  */}
          <div className={Style.aboutKemBeach__heading}>
            <div className={Style.aboutKemBeach__heading_wrapper}>
              <h2>About Kem Beach</h2>
            </div>
          </div>

          {/* Image  */}
          <div className={Style.aboutKemBeach__image}>
            <div className={Style.aboutKemBeach__image_wrapper}>
              <img src="/Image/Home-201809-min.jpg" alt="Kem Beach" />
            </div>
          </div>

          {/* Description */}
          <div className={Style.aboutKemBeach__description}>
            <div className={Style.aboutKemBeach__description_wrapper}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis voluptatibus perferendis corporis veniam quasi numquam
                culpa nisi quibusdam. Beatae fuga deserunt laboriosam alias odio
                vero mollitia accusantium assumenda, dignissimos quibusdam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis voluptatibus perferendis corporis veniam quasi numquam
                culpa nisi quibusdam. Beatae fuga deserunt laboriosam alias odio
                vero mollitia accusantium assumenda, dignissimos quibusdam.
              </p>
            </div>
          </div>

          {/* Button  */}
          <div className={Style.aboutKemBeach__cta}>
            <div className={Style.aboutKemBeach__cta_wrapper}>
              <button>Discover more</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

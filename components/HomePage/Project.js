import React, { useEffect } from "react";
import Style from "../../styles/HomePage_style/project.module.scss";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Project() {
  useEffect(() => {
    gsap.from(`.${Style.project__content}`, {
      duration: 1,
      x: "1000",
      opacity: 0,
      ease: { opacity: 0, ease: Power3.easeOut, delay: 1 },
      scrollTrigger: {
        trigger: `.${Style.project}`,
        markers: false,
        start: "top 80%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  });
  return (
    <article className={Style.project}>
      <div className={Style.project__container}>
        <div className={Style.project__container_wrapper}>
          {/* Image  */}
          <div className={Style.project__image}>
            <div className={Style.project__image_wrapper}>
              <img
                src="/Image/lang-nhiet-doi-suntropicalvilagephuquoc.jpg"
                alt="Sun Tropical Thiet Ke"
              />
            </div>
          </div>

          {/* Content  */}

          <div className={Style.project__content}>
            <div className={Style.project__content_wrapper}>
              {/* Heading  */}
              <div className={Style.project__heading}>
                <div className={Style.project__heading_wrapper}>
                  <h3>Sun Tropical Village</h3>
                  <p>
                    Nép mình bên bờ biển Bãi Kem Phú Quốc, nơi bình mình ló
                    dạng, Sun Tropical Village Phú Quốc là nơi tuyệt vời để bạn
                    bè, gia đình quây quần bên nhau cùng nhau chia sẻ hạnh phúc
                    chuẩn bị cho những chặng hành trình mới
                  </p>
                </div>
              </div>

              {/* Description  */}
              <div className={Style.project__description}>
                <ul className={Style.project__description_wrapper}>
                  <li className={Style.project__item}>
                    <b>Thành Phố</b>: Phú Quốc
                  </li>
                  <li className={Style.project__item}>
                    <b> Mô hình:</b> Biệt thự Nghỉ Dưỡng
                  </li>
                  <li className={Style.project__item}>
                    <b> Giá trị:</b> Dự kiến 20 tỷ
                  </li>
                  <li className={Style.project__item}>
                    <b>Số tầng:</b> 2 tầng
                  </li>
                  <li className={Style.project__item}>
                    <b>Diện tích sàn:</b> 250m2
                  </li>
                  <li className={Style.project__item}>
                    <b>Chủ đầu tư:</b> Sun Group
                  </li>
                  <li className={Style.project__item}>
                    <b>Quy mô dự án:</b>
                  </li>
                  <li className={Style.project__item}>
                    <b>Mật độ xây dựng:</b> 40%
                  </li>
                  <li className={Style.project__item}>
                    <b>Vị trí:</b> Vị trí Bãi Kem, Phú Quốc, Kiên Giang
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

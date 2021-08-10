import React, { useEffect } from "react";
import Style from "../../styles/HomePage_style/design.module.scss";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Design() {
  useEffect(() => {
    gsap.from(`.${Style.design__image}`, {
      duration: 1,
      x: "-500",
      opacity: 0,
      ease: { opacity: 0, ease: Power3.easeOut, delay: 5 },
      scrollTrigger: {
        trigger: `.${Style.design}`,
        markers: false,
        start: "top 70%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    gsap.from(`.${Style.design__content}`, {
      duration: 1,
      x: "500",
      opacity: 0,
      ease: { opacity: 0, ease: Power3.easeOut, delay: 5 },
      scrollTrigger: {
        trigger: `.${Style.design}`,
        markers: false,
        start: "top 70%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  });
  return (
    <article className={Style.design}>
      <div className={Style.design__container}>
        <div className={Style.design__container_wrapper}>
          {/* Image  */}
          <div className={Style.design__image}>
            <div className={Style.design__image_wrapper}>
              <img
                src="/Image/phoi-canh-tropical-village-phu-quoc1.jpg"
                alt="Sun Tropical Thiet Ke"
              />
            </div>
          </div>

          {/* Content  */}

          <div className={Style.design__content}>
            <div className={Style.design__content_wrapper}>
              {/* Heading  */}
              <div className={Style.design__heading}>
                <div className={Style.design__heading_wrapper}>
                  <h3>Thiết Kế</h3>
                </div>
              </div>

              {/* Description  */}
              <div className={Style.design__description}>
                <div className={Style.design__description_wrapper}>
                  <p>
                    Khu nghĩ dưỡng Sun Tropical Village Phú Quốc được thiết kế
                    theo tiêu chí thẩm mỹ hiện đại, có hồ bơi riêng, mỗi biệt
                    thự là một tác phẩm nghệ thuật tinh tế hòa quyện giữa thiên
                    nhiên, nắng vàng và biển xanh.
                  </p>
                  <p>
                    Tại Sun Tropical Village Phú Quốc – Kiến trúc kết hợp giữa
                    những lam bê tông và cây xanh xen kẽ. Trong đó cây xanh làm
                    không gian trở nên tươi mát và tạo không gian riêng tư của
                    khu nghĩ dưỡng còn các vật liệu được sử dụng với màu sắc tự
                    nhiên kết hợp với nhau tạo sự mềm mại và hài hòa cho tổng
                    thể không gian
                  </p>
                </div>
              </div>

              {/* CTA  */}
              <div className={Style.design__cta}>
                <div className={Style.design__cta_wrapper}>
                  <button>Discover more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

import React, { useEffect } from "react";
import Style from "../../styles/sungroup.module.scss";
import SungroupItem from "../atom/SungroupItem";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Sungroup() {
  useEffect(() => {
    gsap.from(`.${Style.sungroup__item} p, .${Style.sungroup__item} h5`, {
      duration: 4,
      x: "0",
      opacity: 0,
      ease: { opacity: 0, ease: Power3.easeOut, delay: 5 },
      scrollTrigger: {
        trigger: `.${Style.sungroup}`,
        markers: false,
        start: "top 70%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  });
  return (
    <article className={Style.sungroup}>
      <div className={Style.sungroup__container}>
        <div className={Style.sungroup__container_wrapper}>
          {/* Heading  */}

          <div className={Style.sungroup__heading}>
            <div className={Style.sungroup__heading_wrapper}>
              <h3>Sun Group</h3>
            </div>
          </div>

          <div className={Style.sungroup__content}>
            <div className={Style.sungroup__content_wrapper}>
              {/* Item  */}
              <SungroupItem
                icon={"a"}
                p={
                  "Sungroup bảo vệ chữ Tín như bảo vệ danh dự của chính mình. Luôn chuẩn bị đầy đủ năng lực thực thi và nỗ lực hết mình để đảm bảo đúng cam kết."
                }
                heading={"UY TÍN"}
              />
              <SungroupItem
                icon={"a"}
                p={
                  "Sungroup luôn đặt tiêu chí chất lượng làm nền tảng, chất lượng sản phẩm dịch vụ, chất lượng trong cam kết; Luôn tự tôn pháp luật, duy trì đạo đức; Lấy khách hàng làm trung tâm."
                }
                heading={"CHẤT LƯỢNG"}
              />
              <SungroupItem
                icon={"a"}
                p={
                  "Sungroup coi trọng người lao động như là tài sản quí giá nhất; Thấu tình – Đạt lý trong mọi quan hệ. Tạo dựng văn hoá làm việc trên cơ sở công bằng, chính trực và nêu cao sức mạnh đoàn kết."
                }
                heading={"NHÂN LỰC"}
              />
              <SungroupItem
                icon={"a"}
                p={
                  "Mở đường và mạnh dạn đương đầu vượt qua những thách thức để đón nhận cơ hội vươn đến thành công."
                }
                heading={"SỨ MỆNH TIÊN PHONG"}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

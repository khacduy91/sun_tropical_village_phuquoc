import React from "react";

import Style from "../../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.footer__container}>
        <div className={Style.footer__container_wrapper}>
          {/* Logo  */}
          <div className={Style.footer__logo}>
            <div className={Style.footer__logo_wrapper}>
              <h1>Sun Tropical Village</h1>
              <span>Phú Quốc</span>
            </div>
          </div>

          {/* Contact  */}
          <div className={Style.footer__contact}>
            <ul className={Style.footer__contact_wrapper}>
              <li className={Style.footer__item}>
                Vị trí dự án: Bãi Kem, Phú Quốc, Kiên Giang
              </li>
              <li className={Style.footer__item}>Tel : 0902.340.118</li>
              <li className={Style.footer__item}>
                Văn phòng: Tầng 19, Tòa Nhà Vincom Center, Số 72 Lê Thánh Tôn,
                Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
              </li>
            </ul>
          </div>

          {/* Footer Menu  */}
          <div className={Style.footer__menu}>
            <ul className={Style.footer__menu_wrapper}>
              <li className={Style.footer__link}>Quy hoạch tổng thể</li>
              <li className={Style.footer__link}>Tiện ích</li>
              {/* <li className={Style.footer__link}>DỰ ÁN</li> */}
              <li className={Style.footer__link}>Tin tức</li>
              <li className={Style.footer__link}>Chủ đầu tư</li>
              <li className={Style.footer__link}>Tài liệu bán hàng</li>
              <li className={Style.footer__link}>Liên hệ</li>
            </ul>
          </div>

          {/* Content  */}
          <div className={Style.footer__content}>
            <div className={Style.footer__content_wrapper}>
              <p>
                ĐÂY LÀ TRANG THÔNG TIN CHÍNH THỨC TỪ CHỦ ĐẦU TƯ DỰ ÁN SUN
                TROPICAL PHU QUOC.
              </p>
              <p>
                Thông tin, hình ảnh, các tiện ích trên website chỉ mang tính
                chất tương đối và có thể được điều chỉnh theo quyết định của chủ
                đầu tư.
              </p>
              <div className={Style.footer__social}>
                <ul className={Style.footer__social_wrapper}>
                  <li className={Style.footer__icon}>
                    <i className="ri-facebook-box-fill"></i>
                  </li>
                  <li className={Style.footer__icon}>
                    <i className="ri-youtube-fill"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

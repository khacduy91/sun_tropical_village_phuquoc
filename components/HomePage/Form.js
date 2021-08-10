import React from "react";
import Style from "../../styles/HomePage_style/form.module.scss";
import InputGroup from "../atom/InputGroup";

export default function Form() {
  return (
    <section className={Style.form}>
      <div className={Style.form__container}>
        <div className={Style.form__container_wrapper}>
          {/* Heading  */}
          <div className={Style.form__heading}>
            <div className={Style.form__heading_wrapper}>
              <h4>NHẬN THÔNG TIN CHI TIẾT VÀ TRẢI NGHIỆM DỰ ÁN</h4>
              <p>
                Để nhận được tài liệu, chính sách chi tiết của dự án và đặt lịch
                tham quan trực tiếp, Quý khách vui lòng để lại thông tin, Sun
                Group sẽ liên hệ ngay!
              </p>
            </div>
          </div>

          {/* Form  */}
          <div className={Style.form__group}>
            <div className={Style.form__group_wrapper}>
              <InputGroup
                className={Style.form__input}
                name="name"
                placeholder="Họ và tên"
                // error={error}
                // inputChange={inputChange}
              />
              <InputGroup
                className={Style.form__input}
                name="phone"
                placeholder="Điện thoại"
                // error={error}
                // inputChange={inputChange}
              />
              <InputGroup
                className={Style.form__input}
                name="name"
                placeholder="Email"
                // error={error}
                // inputChange={inputChange}
              />
              <InputGroup
                className={Style.form__input}
                name="product"
                placeholder="Sản phẩm quan tâm"
                // error={error}
                // inputChange={inputChange}
              />
              <textarea rows={20} defaultValue="Lời nhắn" />
            </div>
          </div>

          <div className={Style.form__submit}>
            <div className={Style.form__submit_wrapper}>
              <button>
                <span>Đăng ký</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

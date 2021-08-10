import React from "react";
import Style from "../../styles/inputGroup.module.scss";
export default function InputGroup({
  name,
  inputChange,
  defaultValue,
  error,
  className,
  placeholder,
}) {
  return (
    <div className={Style.inputGroup}>
      <div className={Style.inputGroup__container}>
        <div className={Style.inputGroup__container_wrapper}>
          <input
            type="text"
            placeholder={placeholder}
            name={name}
            // onChange={inputChange}
            defaultValue={defaultValue}
            className={`${Style.inputGroup__input} ${className}`}
          />
          {/* <p className={Style.inputGroup__error}>{error[name]}</p> */}
        </div>
      </div>
    </div>
  );
}

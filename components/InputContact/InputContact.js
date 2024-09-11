import React from "react";
import styles from "./InputContact.module.scss";

const InputContact = ({
  style = {},
  value,
  onChange,
  placeholder = "",
  height = 42,
  textarea = false,
  required,
  type,
}) => {
  return (
    <div
      className={styles.InputContact}
      style={{ ...style, height: `${height}px` }}
    >
      {textarea ? (
        <textarea
          style={{ height: `${height - 4}px` }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          spellCheck={false}
          style={{ height: `${height - 4}px` }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          type={type ?? "text"}
        />
      )}
    </div>
  );
};

export default InputContact;

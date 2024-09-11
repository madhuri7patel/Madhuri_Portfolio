import React, { forwardRef } from "react";

import styles from "./Input.module.scss";

const Input = (
  { placeholder, type, value, onChange, isTextarea, required },
  ref
) => {
  return (
    <div className={styles.Input}>
      {isTextarea ? (
        <div className={styles.textAreaDiv}>
          <textarea
            required={required}
            className={styles.textArea}
            spellCheck="false"
            ref={ref}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      ) : (
        <input
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type ?? "text"}
          required={required}
        />
      )}
    </div>
  );
};

export default forwardRef(Input);

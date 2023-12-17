import React from "react";

const FormRowSelect = ({
  name,
  list,
  labelText,
  defalutValue = "",
  onChange,
}) => {
  return (
    <div className="form-row">
      <label htmlFor="" className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defalutValue}
        onChange={onChange}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;

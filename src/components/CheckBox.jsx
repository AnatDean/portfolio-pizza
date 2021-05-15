import React from "react";

const CheckBox = ({ text, isChecked, handler }) => (
  <label>
    {text}
    <input type="checkbox" checked={isChecked} onChange={handler} />
  </label>
);

export default CheckBox;

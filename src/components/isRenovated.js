import React from "react";

export default function IsRenovated(props) {
  const { setProperties } = props;
  const { isRenovated, setIsRenovated } = props;
  function handleChange(e) {
    console.log(e.checked);
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setIsRenovated(value);
    if (!isRenovated) {
      setProperties((prevProperties) => {
        return {
          ...prevProperties,
          sqft_living15: 0,
          sqft_lot15: 0,
          yr_renovated: 0,
        };
      });
    }
  }
  return (
    <div>
      <label>
        ¿Está renovado?
        <input
          type="checkbox"
          required
          name="isRenovated"
          checked={isRenovated}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

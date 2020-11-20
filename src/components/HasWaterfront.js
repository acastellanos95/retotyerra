import React from "react";

export default function HasWaterfront(props) {
  const { setProperties } = props;
  const { hasWaterfront, setHasWaterfront } = props;
  function handleChange(e) {
    console.log(e.checked);
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setHasWaterfront(value);
    if (!hasWaterfront) {
      setProperties((prevProperties) => {
        return {
          ...prevProperties,
          waterfront: 1,
        };
      });
    } else {
      setProperties((prevProperties) => {
        return {
          ...prevProperties,
          waterfront: 0,
        };
      });
    }
  }
  return (
    <div>
      <label>
        ¿Tiene vista al mar?
        <input
          type="checkbox"
          required
          name="hasWaterfront"
          checked={hasWaterfront}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

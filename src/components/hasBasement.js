import React from "react";

export default function HasBasement(props) {
  const { setProperties } = props;
  const { hasBasement, setHasBasement } = props;
  function handleChange(e) {
    console.log(e.checked);
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setHasBasement(value);
    if (!hasBasement) {
      setProperties((prevProperties) => {
        return {
          ...prevProperties,
          sqft_basement: 0,
        };
      });
    }
  }
  return (
    <div>
      <input
        type="checkbox"
        required
        name="hasBasement"
        checked={hasBasement}
        onChange={handleChange}
      />
      <label>¿Tiene sótano?</label>
    </div>
  );
}

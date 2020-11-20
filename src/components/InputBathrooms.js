import React from "react";

export default function InputBathrooms(props) {
  const { properties, setProperties } = props;
  const { bathrooms } = properties;
  function handleChange(e) {
    const { name, value } = e.target;
    setProperties((prevProperties) => {
      return {
        ...prevProperties,
        [name]: parseFloat(value),
      };
    });
  }
  return (
    <div>
      <label>
        Baños:
        <input
          type="number"
          placeholder="1"
          required
          name="bathrooms"
          min="1"
          step="0.5"
          value={bathrooms}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

import React from "react";

export default function InputBedrooms(props) {
  const { properties, setProperties } = props;
  const { bedrooms } = properties;
  function handleChange(e) {
    const { name, value } = e.target;
    setProperties((prevProperties) => {
      return {
        ...prevProperties,
        [name]: parseInt(value),
      };
    });
  }

  return (
    <div>
      <label>
        Recamaras:
        <input
          type="number"
          placeholder="1"
          required
          name="bedrooms"
          min="1"
          step="1"
          value={bedrooms}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

import React from "react";

export default function InputYearBuilt(props) {
  const { properties, setProperties } = props;
  const { yr_built } = properties;
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
        Año de construcción:
        <input
          type="number"
          placeholder="1"
          required
          name="yr_built"
          min="1900"
          max="2015"
          step="1"
          value={yr_built}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

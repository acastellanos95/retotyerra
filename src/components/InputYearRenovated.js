import React from "react";

export default function InputYearRenovated(props) {
  const { properties, setProperties } = props;
  const { yr_renovated } = properties;
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
      <h5>Año en que fue renovado:</h5>
      <input
        type="number"
        placeholder="1"
        required
        name="yr_renovated"
        min="1900"
        max="2015"
        step="1"
        value={yr_renovated}
        onChange={handleChange}
      />
    </div>
  );
}

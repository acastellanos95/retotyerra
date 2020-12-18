import React from "react";

export default function InputLocation(props) {
  const { properties, setProperties } = props;
  const { lat, long } = properties;
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
      <h5>
        Latitud:
        <input
          type="number"
          placeholder="1"
          required
          name="lat"
          step="0.01"
          value={lat}
          onChange={handleChange}
        />
      </h5>
      <h5>
        Longitud:
        <input
          type="number"
          placeholder="1"
          required
          name="long"
          step="0.01"
          value={long}
          onChange={handleChange}
        />
      </h5>
    </div>
  );
}

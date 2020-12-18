import React from "react";

export default function InputFloors(props) {
  const { properties, setProperties } = props;
  const { floors } = properties;
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
      <h5>Pisos:</h5>
      <input
        type="number"
        placeholder="1"
        required
        name="floors"
        min="1"
        step="1"
        value={floors}
        onChange={handleChange}
      />
    </div>
  );
}

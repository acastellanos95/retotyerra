import React from "react";

export default function InputMeterSquared(props) {
  const { properties, setProperties, name, label } = props;

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
        {label}
        <input
          type="number"
          placeholder="1"
          required
          name={name}
          min="1"
          step="1"
          value={properties[name]}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

import React from "react";

export default function RangeCondition(props) {
  const { properties, setProperties } = props;
  const { condition } = properties;
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
      <h5>¿En que condición se encuentra la propiedad?</h5>
      <input
        list="tickmarksCondition"
        type="range"
        name="condition"
        min="1"
        max="5"
        step="1"
        value={condition}
        onChange={handleChange}
      />
      <datalist id="tickmarksCondition">
        <option value="1" label="1" />
        <option value="2" label="2" />
        <option value="3" label="3" />
        <option value="4" label="4" />
        <option value="5" label="5" />
      </datalist>
    </div>
  );
}

import React from "react";

export default function RangeViews(props) {
  const { properties, setProperties } = props;
  const { view } = properties;
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
        ¿Qué tan buena es la vista de la propiedad?
        <input
          list="tickmarks"
          type="range"
          name="view"
          min="0"
          max="4"
          step="1"
          value={view}
          onChange={handleChange}
        />
        <datalist id="tickmarks">
          <option value="0" label="0" />
          <option value="1" label="1" />
          <option value="2" label="2" />
          <option value="3" label="3" />
          <option value="4" label="4" />
        </datalist>
      </label>
    </div>
  );
}

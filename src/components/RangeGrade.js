import React, { useState } from "react";

export default function RangeGrade(props) {
  const [label, setLabel] = useState("");
  const { properties, setProperties } = props;
  const { grade } = properties;
  function handleChange(e) {
    const { name, value } = e.target;
    setProperties((prevProperties) => {
      return {
        ...prevProperties,
        [name]: parseInt(value),
      };
    });
    if (grade <= 3) {
      setLabel("Tiene una construcción y diseño pobre");
    } else if (grade > 3 && grade <= 10) {
      setLabel("Tiene una construcción y diseño promedio");
    } else {
      setLabel("Tiene una construcción y diseño de gran calidad");
    }
  }
  return (
    <div>
      <label>
        ¿Como consideras su construcción y diseño?
        <input
          list="tickmarksGrade"
          type="range"
          name="grade"
          min="1"
          max="13"
          step="1"
          value={grade}
          onChange={handleChange}
        />
        <datalist id="tickmarksGrade">
          <option value="1" label="1" />
          <option value="2" label="2" />
          <option value="3" label="3" />
          <option value="4" label="4" />
          <option value="5" label="5" />
          <option value="6" label="6" />
          <option value="7" label="7" />
          <option value="8" label="8" />
          <option value="9" label="9" />
          <option value="10" label="10" />
          <option value="11" label="11" />
          <option value="12" label="12" />
          <option value="13" label="13" />
        </datalist>
      </label>
      <p>{label}</p>
    </div>
  );
}

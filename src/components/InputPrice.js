import React from "react";

export default function InputPrice(props) {
  const { price, setPrice } = props;

  function handleChange(e) {
    const { value } = e.target;
    setPrice(parseFloat(value));
  }

  return (
    <div>
      <label>
        Precio en USD:
        <input
          type="number"
          placeholder="0.00"
          required
          name="price"
          min="1"
          step="0.01"
          title="Currency"
          value={price}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

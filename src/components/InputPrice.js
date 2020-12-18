import React from "react";

export default function InputPrice(props) {
  const { price, setPrice } = props;

  function handleChange(e) {
    const { value } = e.target;
    setPrice(parseFloat(value));
  }

  return (
    <div>
      <h5>Precio en USD:</h5>
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
    </div>
  );
}

import React from "react";

export default function ImportImagesInput(props) {
  return (
    <div>
      <h5>Sube tus fotos:</h5>
      <input type="file" accept="image/png, image/jpeg" />
    </div>
  );
}

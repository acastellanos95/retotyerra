import React from "react";

export default function ImportImagesInput(props) {
  return (
    <div>
      <label>
        Sube tus fotos:
        <input type="file" accept="image/png, image/jpeg" />
      </label>
    </div>
  );
}

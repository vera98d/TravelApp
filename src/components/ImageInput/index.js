import React, { useState } from "react";
import { FileInput, AddImageButton, ImagePreview } from "./style.js";
import AddImgIcon from "./img/addImageButton.svg";

export default function ImageInput(props) {
  const [image, setImage] = useState(null);

  function onInputChange(e) {
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      props.onChange(e.target.files[0]);
    }
  }

  return (
    <>
      {image ? (
        <ImagePreview src={image} />
      ) : (
        <label htmlFor="file-input">
          <AddImageButton src={AddImgIcon} />
        </label>
      )}
      <FileInput id="file-input" type="file" onChange={onInputChange} />
    </>
  );
}

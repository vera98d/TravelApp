import { useState } from "react";
import validateForm from "./validateForm";

function useForm() {
  const [values, setValues] = useState({
    title: "",
    city: "",
    description: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleImage = (file) => {
    setValues({ ...values, image: file });
  };

  const saveValues = () => {
    alert(
      `Data you enered:
            Title: ${values.title},
            City: ${values.city},
            Description: ${values.description},
            Image: ${values.image}`
    );
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", values.image);
    data.append("upload_preset", "memoryPictures");

    await fetch("https://api.cloudinary.com/v1_1/dagaqrq8j/image/upload", {
      method: "POST",
      body: data,
      "Content-Type": "application/json",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(values));

    if (Object.keys(errors).length === 0) {
      console.log(errors);
      saveValues();
      values.image && uploadImage();
    }
  };

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleImage,
  };
}

export default useForm;

import { useState } from "react";
import validateForm from "./validateForm";
import historyEntriesService from "../../services/HistoryEntriesService";

function useForm(province) {
  const [values, setValues] = useState({
    title: "",
    city: "",
    description: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState("notLoading");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleImage = (file) => {
    setValues({ ...values, image: file });
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", values.image);
    data.append("upload_preset", "memoryPictures");

    setLoading("loading");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dagaqrq8j/image/upload",
      {
        method: "POST",
        body: data,
        "Content-Type": "application/json",
      }
    );
    setLoading("loaded");
    return res.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(values));

    if (Object.keys(errors).length === 0) {
      const response = await uploadImage();
      historyEntriesService.insert(
        values.title,
        values.city,
        values.description,
        response.secure_url,
        province
      );
    }
  };

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleImage,
    loading,
  };
}

export default useForm;

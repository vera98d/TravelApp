import React from "react";
import { Form, Input, TextArea, ButtonGroup, ErrorMessage } from "./style";
import useForm from "./useForm";
import ImageInput from "../ImageInput";
import { PrimaryButton } from "../../styles";

function AddPost() {
  const { handleChange, values, handleSubmit, errors, handleImage } = useForm();

  return (
    <>
      <h2>New story</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          id="title"
          name="title"
          type="text"
          value={values.title}
          onChange={handleChange}
          placeholder="Type title of your journey"
        ></Input>
        {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}

        <Input
          id="city"
          name="city"
          type="text"
          value={values.city}
          onChange={handleChange}
          placeholder="Type city of your journey"
        ></Input>
        {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}

        <TextArea
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Describe your story"
        ></TextArea>
        {errors.description && (
          <ErrorMessage>{errors.description}</ErrorMessage>
        )}

        <ButtonGroup>
          <ImageInput onChange={handleImage} />
          <PrimaryButton type="submit">Add story</PrimaryButton>
        </ButtonGroup>
      </Form>
    </>
  );
}

export default AddPost;

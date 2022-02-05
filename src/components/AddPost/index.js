import React from "react";
import {
  Form,
  Input,
  TextArea,
  ButtonGroup,
  ErrorMessage,
  FlexColContainer,
  FlexRowContainer,
  Spinner,
  UploadedImg,
  H1,
  Span,
} from "./style";
import useForm from "./useForm";
import ImageInput from "../ImageInput";
import uploadImg from "./img/upload.svg";
import { PrimaryButton } from "../../styles";

function AddPost() {
  const { handleChange, values, handleSubmit, errors, handleImage, loading } =
    useForm();

  if (loading === "loading") {
    return (
      <FlexColContainer align="center" gap="3em" width="100%">
        <H1>Please wait, we're saving your post...</H1>
        <Spinner />
      </FlexColContainer>
    );
  }
  if (loading === "loaded") {
    return (
      <FlexRowContainer>
        <UploadedImg src={uploadImg} />
        <FlexColContainer align="flex-start" gap="1.5em" width="60%">
          <H1>
            Your post{" "}
            <Span>
              {values.title} - {values.city}{" "}
            </Span>
            has been successfully saved!
          </H1>
        </FlexColContainer>
      </FlexRowContainer>
    );
  }

  if (loading === "notLoading") {
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
}

export default AddPost;

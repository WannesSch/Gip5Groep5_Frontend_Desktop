import { Button, Fade, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import {
  StyledFontAwesomeIcon,
  StyledOverlay,
  StyledOverlayBox,
} from "../Shared/Shared.styled";
import { Item } from "../../Models/Item";
import { useProfile } from "../../Hooks/useProfile";
import { useItem } from "../../Hooks/useItem";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { StyledAddMenue, StyledAddMenueButton } from "./Inventory.styled";

const validationSchema = yup.object({
  name: yup.string().required("field is required"),
  type: yup.string().required("field is required"),
  extraInfo: yup.string().required("field is required"),
  modelNr: yup.string().required("field is required"),
  price: yup.string().required("field is required"),
  amount: yup.number().required("field is required"),
});

type AddRowProps = {
  isOverlayOpened: boolean;
  onClose: () => void;
  updateItems: () => void;
};

function AddRowComponent({
  isOverlayOpened,
  onClose,
  updateItems,
}: AddRowProps) {
  const { authentication } = useProfile();
  const { saveItem } = useItem();

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      extraInfo: "",
      modelNr: "",
      price: "",
      amount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values: Item) => {
      await saveItem(authentication!, values);
      updateItems();
      onClose();
    },
  });

  if (!authentication) return <></>;
  return (
    <Fade in={isOverlayOpened}>
      <StyledOverlay>
        <StyledOverlayBox>
          <StyledFontAwesomeIcon
            icon={faClose}
            onClick={onClose}
          ></StyledFontAwesomeIcon>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <StyledAddMenue
              fullWidth
              id="type"
              name="type"
              label="Type"
              onChange={formik.handleChange}
              error={formik.touched.type && Boolean(formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
            />
            <StyledAddMenue
              fullWidth
              id="extraInfo"
              name="extraInfo"
              label="Extra info"
              onChange={formik.handleChange}
              error={
                formik.touched.extraInfo && Boolean(formik.errors.extraInfo)
              }
              helperText={formik.touched.extraInfo && formik.errors.extraInfo}
            />
            <StyledAddMenue
              fullWidth
              id="modelNr"
              name="modelNr"
              label="Model number"
              onChange={formik.handleChange}
              error={formik.touched.modelNr && Boolean(formik.errors.modelNr)}
              helperText={formik.touched.modelNr && formik.errors.modelNr}
            />
            <StyledAddMenue
              fullWidth
              id="price"
              name="price"
              label="Price"
              onChange={formik.handleChange}
              error={formik.touched.modelNr && Boolean(formik.errors.modelNr)}
              helperText={formik.touched.modelNr && formik.errors.modelNr}
            />
            <StyledAddMenue
              fullWidth
              id="amount"
              name="amount"
              label="Amount"
              onChange={formik.handleChange}
              error={formik.touched.modelNr && Boolean(formik.errors.modelNr)}
              helperText={formik.touched.modelNr && formik.errors.modelNr}
            />

            <StyledAddMenueButton color="primary" variant="contained" fullWidth type="submit">
              Save
            </StyledAddMenueButton>
          </form>
        </StyledOverlayBox>
      </StyledOverlay>
    </Fade>
  );
}

export default AddRowComponent;

import * as React from "react";
import {
  NumberField,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";

const convertStringToNumber = (value: any) => {
  const float = parseFloat(value);
  return isNaN(float) ? null : "0" + float;
};

export const ServiceTypeEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
      <TextInput label="Tên dịch vụ" source="name" fullWidth validate={req} />
      <NumberInput label="Giá" source="price" fullWidth validate={req} />
    </Grid>
  </Grid>
);

const req = [required()];

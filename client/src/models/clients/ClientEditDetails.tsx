import * as React from "react";
import {
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
  DateInput
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";

const convertStringToNumber = (value: any) => {
  const float = parseFloat(value);
  return isNaN(float) ? null : "0" + float;
};

export const ClientEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
      <TextInput label="Tên khách hàng" source="name" fullWidth validate={req} />
    </Grid>

    <Grid item xs={12} sm={8}>
      <TextInput label="Số điện thoại" source="phone" validate={req} fullWidth />
    </Grid>
    <Grid item xs={12} sm={8}>
      <DateInput label="Ngày sinh" source="dob" validate={req} fullWidth />
    </Grid>
    <Grid item xs={12} sm={8}>
      <TextInput label="Địa chỉ" source="address" validate={req} fullWidth />
    </Grid>
    


  </Grid>
);

const req = [required()];

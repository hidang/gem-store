import * as React from "react";
import {
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";

export const ServiceEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
      <TextInput label="Tên dịch vụ" source="Service name" fullWidth validate={req} />
    </Grid>

    <Grid item xs={12} sm={8}>
      <NumberInput label="Mã dịch vụ" source="Service code" validate={req} fullWidth min={0} />
    </Grid>
  </Grid>
);

const req = [required()];

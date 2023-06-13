import * as React from "react";
import {
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
} from "react-admin";
import { InputAdornment, Grid } from "@mui/material";

export const ProductEditDetails = () => (
  <Grid container columnSpacing={2}>
    <Grid item xs={12} sm={8}>
      <TextInput source="Product name" fullWidth validate={req} />
    </Grid>
    <Grid item xs={12} sm={4}>
      <ReferenceInput source="Product type" reference="categories">
        <SelectInput optionText="name" validate={req} fullWidth />
      </ReferenceInput>
    </Grid>
    <Grid item xs={12} sm={4}>
      <NumberInput source="Product code" validate={req} fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <NumberInput source="Supplier code" validate={req} fullWidth />
    </Grid>
    <Grid item xs={0} sm={4}></Grid>

    <Grid item xs={12} sm={4}>
      <NumberInput
        source="Price"
        InputProps={{
          endAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        validate={req}
        fullWidth
      />
    </Grid>

    <Grid item xs={12} sm={4}>
      <NumberInput source="Quantity" validate={req} fullWidth />
    </Grid>
  </Grid>
);

const req = [required()];

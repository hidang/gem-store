import * as React from "react";
import {
  Datagrid,
  DateField,
  Edit,
  EditButton,
  Pagination,
  ReferenceManyField,
  ReferenceManyCount,
  required,
  TabbedForm,
  TextField,
  TextInput,
  useRecordContext,
} from "react-admin";

import { ProductEditDetails } from "./ProductEditDetails";

const ProductEdit = () => (
  <Edit>
    <TabbedForm>
      <TabbedForm.Tab
        label="Edit product"
        path="edit"
        sx={{ maxWidth: "40em" }}
      >
        <ProductEditDetails />
      </TabbedForm.Tab>
      <TabbedForm.Tab
        label="description"
        path="description"
        sx={{ maxWidth: "40em" }}
      ></TabbedForm.Tab>
    </TabbedForm>
  </Edit>
);

const req = [required()];

export default ProductEdit;

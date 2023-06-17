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

import { ProductTypeEditDetails } from "./ProductTypeEditDetails";

const ProductTypeEdit = () => (
  <Edit>
    <TabbedForm>
      <TabbedForm.Tab
        label="Chỉnh sửa loại sản phẩm"

        sx={{ maxWidth: "40em" }}
      >
        <ProductTypeEditDetails />
      </TabbedForm.Tab>

    </TabbedForm>
  </Edit>
);

const req = [required()];

export default ProductTypeEdit;

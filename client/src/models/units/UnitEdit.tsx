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

import { UnitEditDetails } from "./UnitEditDetails";

const UnitEdit = () => (
  <Edit>
    <TabbedForm>
      <TabbedForm.Tab
        label="Chỉnh sửa đơn vị tính"

        sx={{ maxWidth: "40em" }}
      >
        <UnitEditDetails />
      </TabbedForm.Tab>

    </TabbedForm>
  </Edit>
);

const req = [required()];

export default UnitEdit;

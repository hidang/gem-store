import * as React from "react";
import { ReferenceField, ReferenceFieldProps, TextField } from "react-admin";

interface Props {
  source?: string;
}

const SupplierReferenceField = (
  props: Props & Omit<ReferenceFieldProps, "source" | "reference" | "children">
) => (
  <ReferenceField
    label="Supplier"
    source="Supplier_id"
    reference="Suppliers"
    {...props}
  >
    <TextField source="reference" />
  </ReferenceField>
);

SupplierReferenceField.defaultProps = {
  source: "Supplier_id",
};

export default SupplierReferenceField;

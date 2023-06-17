import * as React from "react";
import { ReferenceField, ReferenceFieldProps, TextField } from "react-admin";

interface Props {
  source?: string;
}

const ProductTypeReferenceField = (
  props: Props & Omit<ReferenceFieldProps, "source" | "reference" | "children">
) => (
  <ReferenceField
    label="ProductType"
    source="ProductType_id"
    reference="ProductTypes"
    {...props}
  >
    <TextField source="reference" />
  </ReferenceField>
);

ProductTypeReferenceField.defaultProps = {
  source: "ProductType_id",
};

export default ProductTypeReferenceField;

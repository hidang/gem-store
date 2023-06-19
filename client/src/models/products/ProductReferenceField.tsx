import * as React from "react";
import { ReferenceField, ReferenceFieldProps, TextField } from "react-admin";

interface Props {
  source?: string;
}

const ProductReferenceField = (
  props: Props & Omit<ReferenceFieldProps, "source" | "reference" | "children">
) => (
  <ReferenceField
    label="Product"
    source="Product_id"
    reference="Products"
    {...props}
  >
    <TextField source="reference" />
  </ReferenceField>
);

ProductReferenceField.defaultProps = {
  source: "Product_id",
};

export default ProductReferenceField;

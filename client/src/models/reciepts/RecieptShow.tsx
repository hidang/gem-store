import * as React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { Link, ReferenceField, TextField, useGetMany, useRecordContext, Datagrid, ArrayField, FunctionField } from 'react-admin';
import { Product, Reciept } from '../../types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';


// const productIds = record ? record.basket.map(item => item.product_id) : [];

// const {  data: products } = useGetMany<Product>(
//     'products',
//     { ids: productIds }

// );
// const productsById = products
//     ? products.reduce((acc, product) => {
//           acc[product.id] = product;
//           return acc;
//       }, {} as any)
//     : {};



const RecieptShow = () => {
    const record = useRecordContext<Reciept>();
    if (!record) return null;
    return (
       
        <ArrayField source="products">
            <Datagrid bulkActionButtons={false}>
                <TextField label="ID" source="id" />
                <TextField label="Tên Sản phẩm" source="name" />

                <ReferenceField label="Loại sản phẩm" source="productType_id" reference="product_type">
                    <TextField source="name" />
                </ReferenceField>
                <TextField label="Số lượng" source="count" />
                <ReferenceField label="Đơn vị tính" source="productType_id" reference="product_type">
                    <ReferenceField source="unit_id" reference="unit">
                        <TextField source="name" />
                    </ReferenceField>
                </ReferenceField>

                <ReferenceField label="Nhà cung cấp" source="supplier_id" reference="supplier">
                    <TextField source="name" />
                </ReferenceField>

                <TextField label="Đơn giá" source="pricePerProduct" />
                <FunctionField
                    label="Thành tiền"
                    render={(record: { count: number; pricePerProduct: number; }) => `${record.count * record.pricePerProduct}`}
                />
            </Datagrid>
        </ArrayField>
    );
};


export default RecieptShow;

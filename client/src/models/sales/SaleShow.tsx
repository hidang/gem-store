import * as React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { Link, ReferenceField, TextField, useGetMany, useRecordContext, Datagrid, ArrayField, FunctionField } from 'react-admin';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';




const SaleShow = () => {

    return (

        <ArrayField source="productOnSales">
            <Datagrid bulkActionButtons={false}>
                <TextField label="ID" source="id" />
                <TextField label="Sản phẩm" source="name" />
                <TextField label="Loại sản phẩm" source="productTypeName" />
                <TextField label="Số lượng" source="count" />

                <ReferenceField label="Đơn vị tính" source="productType_id" reference="product_type">
                    <ReferenceField source="unit_id" reference="unit">
                        <TextField source="name" />
                    </ReferenceField>
                </ReferenceField>


                <FunctionField
                    label="Đơn giá"
                    render={(record: { profitPercent: number; pricePerProduct: number; }) => `${record.profitPercent * record.pricePerProduct}`}
                />
                <FunctionField
                    label="Thành tiền"
                    render={(record: { count: number; pricePerProduct: number; profitPercent: number; }) => `${record.count * record.pricePerProduct * record.profitPercent}`}
                />
            </Datagrid>
        </ArrayField>
    );
};


export default SaleShow;

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {IProduct} from "../forms/ProductForm.tsx";

interface ProductListProps {
    products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <List>
            {products.map((product, index) => (
                <ListItem key={index}>
                    <ListItemText
                        primary={product.name}
                        secondary={`Description: ${product.description}, Currency: ${product.currency}, Zone: ${product.zone}`}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default ProductList;

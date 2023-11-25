import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {IProduct} from "../forms/ProductForm.tsx";

interface ProductListProps {
    products: IProduct[];
    onItemClick?: (p:IProduct) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onItemClick  }) => {
    return (
        <List>
            {products.map((product, index) => (
                <ListItem key={index}>
                    <ListItemText
                        onClick={() => onItemClick && onItemClick(product)}
                        primary={product.name}
                        secondary={`Description: ${product.description}, Currency: ${product.currency}, Zone: ${product.zone}`}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default ProductList;

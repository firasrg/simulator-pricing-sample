import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { ProductListProps } from '@models/ProductListProps';
import IconButton from '@mui/material/IconButton';
import IconDelete from '@mui/icons-material/Delete';

const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => {
  return (
    <List>
      {products.map((product, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={product.name}
            secondary={`Description: ${product.description}, Currency: ${product.currency}, Zone: ${product.zone}`}
          />
          <IconButton aria-label="delete" onClick={() => onDelete(product.name)}>
            <IconDelete />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;

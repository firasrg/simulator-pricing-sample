import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { GuaranteeListProps } from '@models/GuaranteeListProps';

const GuaranteeList: React.FC<GuaranteeListProps> = ({ guarantees }) => {
  return (
    <List>
      {guarantees.map((guarantee, index) => (
        <ListItem key={index}>
          <ListItemText primary={guarantee.name} secondary={`Description: ${guarantee.description}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default GuaranteeList;

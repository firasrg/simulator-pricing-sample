import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface GuaranteeListProps {
  guarantees: {
    name: string;
    description: string;
    pricing: {
      basePrice: number;
      currency: string;
      partnerPrice: number;
      childPrice: number;
      ageInterval: string;
    };
  }[];
}

const GuaranteeList: React.FC<GuaranteeListProps> = ({ guarantees }) => {
  return (
    <List>
      {guarantees.map((guarantee, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={guarantee.name}
            secondary={`Description: ${guarantee.description}, Base Price: ${guarantee.pricing.basePrice} ${guarantee.pricing.currency}, Partner Price: ${guarantee.pricing.partnerPrice}, Child Price: ${guarantee.pricing.childPrice}, Age Interval: ${guarantee.pricing.ageInterval}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default GuaranteeList;

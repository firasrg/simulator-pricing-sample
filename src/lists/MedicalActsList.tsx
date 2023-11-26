import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

export interface IMedicalAct {
  family: string;
  name: string;
  code: string;
}
interface MedicalActListProps {
  medicalActs: IMedicalAct[];
}

const MedicalActList: React.FC<MedicalActListProps> = ({ medicalActs }) => {
  return (
    <List>
      {medicalActs.map((medicalAct, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText
              primary={medicalAct.name}
              secondary={`Family: ${medicalAct.family}, Code: ${medicalAct.code}`}
            />
          </ListItem>
          {index < medicalActs.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default MedicalActList;

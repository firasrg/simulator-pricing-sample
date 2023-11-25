import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface MedicalActListProps {
    medicalActs: { name: string; description: string }[];
}

const MedicalActList: React.FC<MedicalActListProps> = ({ medicalActs }) => {
    return (
        <List>
            {medicalActs.map((medicalAct, index) => (
                <ListItem key={index}>
                    <ListItemText primary={medicalAct.name} secondary={medicalAct.description} />
                </ListItem>
            ))}
        </List>
    );
};

export default MedicalActList;

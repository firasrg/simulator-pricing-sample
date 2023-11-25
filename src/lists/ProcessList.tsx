// ProcessList.tsx
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {IProcess} from "../forms/ProcessForm.tsx";

interface ProcessListProps {
    processes: IProcess[];
}

const ProcessList: React.FC<ProcessListProps> = ({ processes }) => {
    return (
        <List>
            {processes.map((process, index) => (
                <React.Fragment key={index}>
                    <ListItem>
                        <ListItemText primary={process.name} secondary={process.description} />
                    </ListItem>
                    {index < processes.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </List>
    );
};

export default ProcessList;

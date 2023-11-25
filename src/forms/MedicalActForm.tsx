import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface MedicalActFormProps {
    onSubmit: (medicalAct: { name: string; description: string }) => void;
}

const MedicalActForm: React.FC<MedicalActFormProps> = ({ onSubmit }) => {
    const [medicalActName, setMedicalActName] = useState('');
    const [medicalActDescription, setMedicalActDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name: medicalActName, description: medicalActDescription });
        setMedicalActName('');
        setMedicalActDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Medical Act Name"
                variant="outlined"
                value={medicalActName}
                onChange={(e) => setMedicalActName(e.target.value)}
            />
            <TextField
                label="Medical Act Description"
                variant="outlined"
                value={medicalActDescription}
                onChange={(e) => setMedicalActDescription(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                Add Medical Act
            </Button>
        </form>
    );
};

export default MedicalActForm;

// MedicalActForm.tsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {IMedicalAct} from "../lists/MedicalActsList.tsx";

interface MedicalActFormProps {
    onSubmit: (medicalAct: IMedicalAct) => void;
}

const MedicalActForm: React.FC<MedicalActFormProps> = ({ onSubmit }) => {
    const [medicalAct, setMedicalAct] = useState<IMedicalAct>({ name: '', family: '', code: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMedicalAct({ ...medicalAct, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(medicalAct);
        setMedicalAct({ name: '', family: '', code: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Medical Act Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={medicalAct.name}
                onChange={handleChange}
                required
            />
            <TextField
                label="Medical Act Family"
                variant="outlined"
                fullWidth
                margin="normal"
                name="family"
                value={medicalAct.family}
                onChange={handleChange}
                required
            />
            <TextField
                label="Medical Act Code"
                variant="outlined"
                fullWidth
                margin="normal"
                name="code"
                value={medicalAct.code}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Create Medical Act
            </Button>
        </form>
    );
};

export default MedicalActForm;

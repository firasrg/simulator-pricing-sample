import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export interface IGuarantee {
    name: string;
    description: string;
    pricing: { basePrice: number; currency: string; partnerPrice: number; childPrice: number; ageInterval: string }
}

interface GuaranteeFormProps {
    onSubmit: (guarantee: IGuarantee ) => void;
    existingMedicalActs: string[]; // List of existing medical acts
}

const GuaranteeForm: React.FC<GuaranteeFormProps> = ({ onSubmit, existingMedicalActs }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedMedicalActs, setSelectedMedicalActs] = useState<string[]>([]);
    const [basePrice, setBasePrice] = useState(0);
    const [currency, setCurrency] = useState('');
    const [partnerPrice, setPartnerPrice] = useState(0);
    const [childPrice, setChildPrice] = useState(0);
    const [ageInterval, setAgeInterval] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            name,
            description,
            pricing: { basePrice, currency, partnerPrice, childPrice, ageInterval },
        });
        setName('');
        setDescription('');
        setSelectedMedicalActs([]);
        setBasePrice(0);
        setCurrency('');
        setPartnerPrice(0);
        setChildPrice(0);
        setAgeInterval('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Guarantee Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <FormControl fullWidth variant="outlined" style={{ marginTop: '10px' }}>
                <InputLabel id="medical-acts-label">Select Medical Acts</InputLabel>
                <Select
                    label="Select Medical Acts"
                    multiple
                    value={selectedMedicalActs}
                    onChange={(e) => setSelectedMedicalActs(e.target.value as string[])}
                >
                    {existingMedicalActs.map((medicalAct) => (
                        <MenuItem key={medicalAct} value={medicalAct}>
                            {medicalAct}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Base Price"
                variant="outlined"
                type="number"
                value={basePrice}
                onChange={(e) => setBasePrice(Number(e.target.value))}
            />
            <TextField
                label="Currency"
                variant="outlined"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            />
            <TextField
                label="Partner Price"
                variant="outlined"
                type="number"
                value={partnerPrice}
                onChange={(e) => setPartnerPrice(Number(e.target.value))}
            />
            <TextField
                label="Child Price"
                variant="outlined"
                type="number"
                value={childPrice}
                onChange={(e) => setChildPrice(Number(e.target.value))}
            />
            <TextField
                label="Age Interval"
                variant="outlined"
                value={ageInterval}
                onChange={(e) => setAgeInterval(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Create Guarantee
            </Button>
        </form>
    );
};

export default GuaranteeForm;

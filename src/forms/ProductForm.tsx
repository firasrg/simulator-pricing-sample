import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { ProductFormProps } from '@models/ProductFormProps';

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, existingGuarantees }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('');
  const [zone, setZone] = useState('');
  const [selectedGuarantees, setSelectedGuarantees] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, currency, zone, guarantees: selectedGuarantees });
    setName('');
    setDescription('');
    setCurrency('');
    setZone('');
    setSelectedGuarantees([]);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <TextField
        required
        fullWidth
        label="Product Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        fullWidth
        label="Currency"
        variant="outlined"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <TextField fullWidth label="Zone" variant="outlined" value={zone} onChange={(e) => setZone(e.target.value)} />
      <FormControl fullWidth variant="outlined" style={{ marginTop: '10px' }} required>
        <InputLabel id="guarantees-label">Select Guarantees</InputLabel>
        <Select
          label="Select Guarantees"
          multiple
          value={selectedGuarantees}
          onChange={(e) => setSelectedGuarantees(e.target.value as string[])}>
          {existingGuarantees.map((guarantee) => (
            <MenuItem key={guarantee} value={guarantee}>
              {guarantee}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
        Create Product
      </Button>
    </form>
  );
};

export default ProductForm;

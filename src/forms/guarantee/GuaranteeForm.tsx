import React, { useReducer } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { GuaranteeFormProps } from '@models/IGuaranteeFormProps';
import guaranteeReducer, {
  EAge,
  EPricing,
  initialState,
  setActs,
  setAgeInterval,
  setDescription,
  setName,
  setPricingAmount
} from '@forms/guarantee/reducer';

const GuaranteeForm: React.FC<GuaranteeFormProps> = ({ onSubmit, existingMedicalActs }) => {
  const [newGuarantee, dispatch] = useReducer(guaranteeReducer, initialState);

  const { name, description, pricing, age, selectedActs } = newGuarantee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(newGuarantee);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <TextField
        required
        fullWidth
        label="Guarantee Name"
        variant="outlined"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />
      <TextField
        fullWidth
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => dispatch(setDescription(e.target.value))}
      />
      <FormControl fullWidth variant="outlined" style={{ marginTop: '10px' }} required>
        <InputLabel id="medical-acts-label">Select Medical Acts</InputLabel>
        <Select
          label="Select Medical Acts"
          multiple
          value={selectedActs}
          onChange={(e) => dispatch(setActs(e.target.value as string[]))}>
          {existingMedicalActs.map((medicalAct) => (
            <MenuItem key={medicalAct} value={medicalAct}>
              {medicalAct}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        required
        fullWidth
        label="Base Price"
        variant="outlined"
        type="number"
        value={pricing[EPricing.BASE]}
        onChange={(e) => dispatch(setPricingAmount({ target: EPricing.BASE, amount: Number(e.target.value) }))}
      />
      <TextField
        fullWidth
        label="Partner Price"
        variant="outlined"
        type="number"
        value={pricing[EPricing.PARTNER]}
        onChange={(e) => dispatch(setPricingAmount({ target: EPricing.PARTNER, amount: Number(e.target.value) }))}
      />
      <TextField
        fullWidth
        label="Child Price"
        variant="outlined"
        type="number"
        value={pricing[EPricing.CHILD]}
        onChange={(e) => dispatch(setPricingAmount({ target: EPricing.CHILD, amount: Number(e.target.value) }))}
      />
      <TextField
        fullWidth
        label="Age Min"
        type="number"
        variant="outlined"
        value={age[EAge.MIN]}
        onChange={(e) => dispatch(setAgeInterval({ [EAge.MIN]: Number(e.target.value) }))}
      />
      <TextField
        fullWidth
        label="Age Max"
        variant="outlined"
        type="number"
        value={age[EAge.MAX]}
        onChange={(e) => dispatch(setAgeInterval({ [EAge.MAX]: Number(e.target.value) }))}
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
        Create Guarantee
      </Button>
    </form>
  );
};

export default GuaranteeForm;

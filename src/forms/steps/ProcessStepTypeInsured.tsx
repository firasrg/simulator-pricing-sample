import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';

interface ProcessStepTypeInsuredProps {
  onChange: (selectedOptions: string[]) => void;
}

const ProcessStepTypeInsured: React.FC<ProcessStepTypeInsuredProps> = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Who do you want to insure?
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={selectedOptions.includes('me')} onChange={() => handleCheckboxChange('me')} />}
          label="Me"
        />
        <FormControlLabel
          control={
            <Checkbox checked={selectedOptions.includes('partner')} onChange={() => handleCheckboxChange('partner')} />
          }
          label="My Partner"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedOptions.includes('children')}
              onChange={() => handleCheckboxChange('children')}
            />
          }
          label="My Children"
        />
      </FormGroup>
    </div>
  );
};

export default ProcessStepTypeInsured;

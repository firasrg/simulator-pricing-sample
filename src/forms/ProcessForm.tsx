import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IProcessStep } from '@models/IProcessStep';
import { IProcess } from '@models/IProcess';

// Placeholder components for predefined steps
const ProcessStepTypeInsured = () => {
  return <div>Process Step Type Insured</div>;
};

const ProcessStepDateBirth = () => {
  return <div>Process Step Date Birth</div>;
};

const ProcessStepAddress = () => {
  return <div>Process Step Address</div>;
};

const predefinedSteps: IProcessStep[] = [
  { title: 'Who you want to insure?', component: <ProcessStepTypeInsured /> },
  { title: 'When were you born?', component: <ProcessStepDateBirth /> },
  { title: "What's your address?", component: <ProcessStepAddress /> }
];

interface ProcessFormProps {
  onSubmit: (process: IProcess) => void;
}

const ProcessForm: React.FC<ProcessFormProps> = ({ onSubmit }) => {
  const [process, setProcess] = useState<IProcess>({
    name: '',
    description: '',
    steps: [...predefinedSteps]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProcess({ ...process, [e.target.name]: e.target.value });
  };

  const handleStepTitleChange = (index: number, title: string) => {
    const updatedSteps = [...process.steps];
    updatedSteps[index].title = title;
    setProcess({ ...process, steps: updatedSteps });
  };

  const handleAddStep = () => {
    setProcess({ ...process, steps: [...process.steps, { title: '', component: null }] });
  };

  const handleRemoveStep = (index: number) => {
    const updatedSteps = [...process.steps];
    updatedSteps.splice(index, 1);
    setProcess({ ...process, steps: updatedSteps });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(process);
    setProcess({ name: '', description: '', steps: [...predefinedSteps] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Process Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="name"
        value={process.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        name="description"
        multiline
        rows={4}
        value={process.description}
        onChange={handleChange}
      />
      {process.steps.map((step, index) => (
        <div key={index}>
          <TextField
            label={`Step ${index + 1} Title`}
            variant="outlined"
            fullWidth
            margin="normal"
            value={step.title}
            onChange={(e) => handleStepTitleChange(index, e.target.value)}
          />
          <Button variant="outlined" color="secondary" onClick={() => handleRemoveStep(index)}>
            Remove Step
          </Button>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleAddStep}>
        Add Step
      </Button>
      <Button type="submit" variant="contained" color="primary">
        Create Process
      </Button>
    </form>
  );
};

export default ProcessForm;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface QuotationStepFormProps {
    onSubmit: (step: { question: string }) => void;
}

const QuotationStepForm: React.FC<QuotationStepFormProps> = ({ onSubmit }) => {
    const [stepQuestion, setStepQuestion] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ question: stepQuestion });
        setStepQuestion(''); // Clear the input after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Quotation Step Question"
                variant="outlined"
                value={stepQuestion}
                onChange={(e) => setStepQuestion(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                Create Quotation Step
            </Button>
        </form>
    );
};

export default QuotationStepForm;

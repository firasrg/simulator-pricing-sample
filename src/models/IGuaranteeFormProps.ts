import { IGuarantee } from './IGuarantee';

export interface GuaranteeFormProps {
  onSubmit: (guarantee: IGuarantee) => void;
  existingMedicalActs: string[]; // List of existing medical acts
}

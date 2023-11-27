import { IGuarantee } from '@forms/guarantee/reducer';

export interface GuaranteeFormProps {
  onSubmit: (guarantee: IGuarantee) => void;
  existingMedicalActs: string[];
}

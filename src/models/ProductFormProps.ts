import { IProduct } from '@models/IProduct';

export interface ProductFormProps {
  onSubmit: (product: IProduct) => void;
  existingGuarantees: string[];
}

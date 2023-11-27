import { IProduct } from '@models/IProduct';

export interface ProductListProps {
  products: IProduct[];
  onDelete(name: string): void;
}

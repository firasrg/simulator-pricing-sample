export interface IGuarantee {
  name: string;
  description: string;
  pricing: {
    basePrice: number;
    currency: string;
    partnerPrice: number;
    childPrice: number;
    ageInterval: string;
  };
}

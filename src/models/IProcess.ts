import { IProcessStep } from './IProcessStep';

export interface IProcess {
  name: string;
  description: string;
  steps: IProcessStep[];
}

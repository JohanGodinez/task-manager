import { IStatus, IUser } from "./index";

export interface ITask {
  id: number;
  linkbitrix: string;
  nobitrix: number;
  status: IStatus;
  title: string;
  project: string;
  description: string;
  user: IUser;
}
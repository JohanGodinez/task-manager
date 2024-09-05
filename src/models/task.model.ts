interface ITask {
  id: number;
  status: IStatus;
  title: string;
  project: string;
  description: string;
  user: IUser;
}
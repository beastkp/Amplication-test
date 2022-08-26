import { Project } from "../project/Project";
import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  project?: Project | null;
  roles: Array<string>;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};

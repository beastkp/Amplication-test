import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name: string;
  owner?: UserCreateNestedManyWithoutProjectsInput;
  startDate?: Date | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
